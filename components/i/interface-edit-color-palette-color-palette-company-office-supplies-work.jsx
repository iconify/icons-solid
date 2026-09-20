import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r8w6ofebl.css';
import '../../css/v/vyd926dwy.css';
import '../../css/i/i2g-o0b8f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="r8w6ofebl"/><circle class="vyd926dwy"/><circle class="i2g-o0b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-color-palette-color-palette-company-office-supplies-work"} {...others} />);
}

export default Component;
