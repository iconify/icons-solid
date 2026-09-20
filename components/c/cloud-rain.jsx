import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5xnp4tqf.css';
import '../../css/h/hs54bjbuo.css';
import '../../css/u/u79yq9b4p.css';
import '../../css/d/dh0ml9jui.css';
import '../../css/b/blxaq41pa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l5xnp4tqf"/><path class="hs54bjbuo"/><path class="u79yq9b4p"/><path class="dh0ml9jui"/><path class="blxaq41pa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-rain"} {...others} />);
}

export default Component;
