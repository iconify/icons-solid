import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dfk8jdnek.css';
import '../../css/g/gvx2gxbfq.css';
import '../../css/n/n3i13bc7c.css';
import '../../css/v/voo9izbdb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dfk8jdnek"/><circle class="gvx2gxbfq"/><circle class="n3i13bc7c"/><path class="voo9izbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-skull-1-crash-death-delete-die-error-garbage-remove-skull-trash"} {...others} />);
}

export default Component;
