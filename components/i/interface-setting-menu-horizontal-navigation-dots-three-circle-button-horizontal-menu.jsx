import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hhov-gbog.css';
import '../../css/o/o5grrub_r.css';
import '../../css/r/rvurs1tbw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="hhov-gbog"/><circle class="o5grrub_r"/><circle class="rvurs1tbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-menu-horizontal-navigation-dots-three-circle-button-horizontal-menu"} {...others} />);
}

export default Component;
