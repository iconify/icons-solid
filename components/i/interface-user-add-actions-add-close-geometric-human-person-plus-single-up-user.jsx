import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/p/pm2qdmdcn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="gdjy5jlqy"/><path class="pm2qdmdcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-user-add-actions-add-close-geometric-human-person-plus-single-up-user"} {...others} />);
}

export default Component;
