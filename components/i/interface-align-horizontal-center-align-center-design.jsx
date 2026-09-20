import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eqz6b-9nd.css';
import '../../css/g/gde1dre0o.css';
import '../../css/w/wi5kxsbwp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="eqz6b-9nd"/><rect class="gde1dre0o"/><path class="wi5kxsbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-align-horizontal-center-align-center-design"} {...others} />);
}

export default Component;
