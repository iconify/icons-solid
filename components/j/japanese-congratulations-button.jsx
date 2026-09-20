import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw5ar0h8y.css';
import '../../css/g/gdy4fzb-z.css';
import '../../css/y/yyihj2ujd.css';
import '../../css/m/m3gwznb_p.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="hw5ar0h8y"/><g transform="translate(-521.6 -12.27)scale(.3004)"><circle transform="translate(1726 30.29)scale(3.619)" class="gdy4fzb-z"/><path class="yyihj2ujd"/></g><circle transform="translate(-3.13 -3.172)scale(1.087)" class="m3gwznb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-congratulations-button"} {...others} />);
}

export default Component;
