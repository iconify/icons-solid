import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocwzk9s4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ocwzk9s4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:surgery"} {...others} />);
}

export default Component;
