import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl20pggri.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dl20pggri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:arrowleft"} {...others} />);
}

export default Component;
