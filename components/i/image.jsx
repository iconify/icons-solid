import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkj12ubkl.css';
import '../../css/f/fbnpwsodw.css';
import '../../css/x/xeitc2b3n.css';
import '../../css/y/yu2ef9i5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nkj12ubkl"/><circle class="fbnpwsodw"/><path class="xeitc2b3n"/><circle class="yu2ef9i5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:image"} {...others} />);
}

export default Component;
