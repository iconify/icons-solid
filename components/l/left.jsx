import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtfmx7b3v.css';
import '../../css/b/bopf4ubik.css';
import '../../css/e/eb6s51zoz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wtfmx7b3v"><path class="bopf4ubik"/><path class="eb6s51zoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:left"} {...others} />);
}

export default Component;
