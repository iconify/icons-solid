import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxrkyf6ky.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/r/ra_tdac_m.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGaHRT4j7Q" class="lxrkyf6ky"/></defs><g class="ft5dv1b6b"><use href="#SVGaHRT4j7Q"/><use href="#SVGaHRT4j7Q" class="av3m8fbrw"/><path class="ra_tdac_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:component-divider-vertical"} {...others} />);
}

export default Component;
