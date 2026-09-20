import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n3e02zdfi.css';
import '../../css/a/aggenkmem.css';
import '../../css/y/ywie0coey.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="n3e02zdfi"/><circle class="aggenkmem"/><path class="ywie0coey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-painting-painting-entertainment-display-museum-event-hobby-exhibit"} {...others} />);
}

export default Component;
