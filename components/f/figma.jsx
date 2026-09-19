import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wuzbxugci.css';
import '../../css/g/gxot2cbmf.css';
import '../../css/w/wtcllob5c.css';
import '../../css/e/e3xzh381y.css';
import '../../css/e/erq0zbctn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="wuzbxugci"/><path class="gxot2cbmf"/><path class="wtcllob5c"/><path class="e3xzh381y"/><path class="erq0zbctn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:figma"} {...others} />);
}

export default Component;
