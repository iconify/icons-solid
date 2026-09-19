import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1_swcb_o.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/m/mez_4wb6c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMGRJObUH"><g class="v1_swcb_o"><circle class="kb9zbkb1z"/><circle class="mez_4wb6c"/></g></mask></defs><path mask="url(#SVGMGRJObUH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:radio-two"} {...others} />);
}

export default Component;
