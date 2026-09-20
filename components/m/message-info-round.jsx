import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hvscrmbta.css';
import '../../css/u/u98s8js0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="hvscrmbta"/><path class="u98s8js0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-info-round"} {...others} />);
}

export default Component;
