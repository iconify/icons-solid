import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qek2tkbit.css';
import '../../css/h/hgauyrvul.css';
import '../../css/i/i55550s0j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSrpPkcfM"><g class="s9cl3zbei"><rect class="qek2tkbit"/><path class="hgauyrvul"/><path class="i55550s0j"/></g></mask></defs><path mask="url(#SVGSrpPkcfM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:f-six-key"} {...others} />);
}

export default Component;
