import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/spwcq9bsy.css';
import '../../css/m/mwc9s5vvp.css';
import '../../css/y/ygp_i2sen.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="spwcq9bsy"/><circle class="mwc9s5vvp"/><path class="ygp_i2sen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-column-2-pillar-building-historical-column"} {...others} />);
}

export default Component;
