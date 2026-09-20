import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ct7lk7b_v.css';
import '../../css/q/qd5h8fb2e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="ct7lk7b_v"/><path class="qd5h8fb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-catergories-sofa-decoration-furniture-interior-design-couch-sofa-decorate"} {...others} />);
}

export default Component;
