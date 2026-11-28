import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/imzldxsyv.css';
import '../../css/n/nbau5bnxf.css';
import '../../css/x/xbkcvubst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="imzldxsyv"/><path class="nbau5bnxf"/><path class="xbkcvubst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-moon-lightning"} {...others} />);
}

export default Component;
