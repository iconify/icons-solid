import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_v6015-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_v6015-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:expand-more-line"} {...others} />);
}

export default Component;
