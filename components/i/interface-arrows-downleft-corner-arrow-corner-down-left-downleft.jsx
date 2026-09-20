import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o04t7ctoj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="o04t7ctoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-downleft-corner-arrow-corner-down-left-downleft"} {...others} />);
}

export default Component;
