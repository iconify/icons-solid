import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay2u52b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay2u52b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:shape-half-circle"} {...others} />);
}

export default Component;
