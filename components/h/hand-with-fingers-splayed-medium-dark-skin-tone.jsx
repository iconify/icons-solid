import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7_5d9ber.css';
import '../../css/a/acwejz0_o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z7_5d9ber"/><path class="acwejz0_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hand-with-fingers-splayed-medium-dark-skin-tone"} {...others} />);
}

export default Component;
