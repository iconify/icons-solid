import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu7egmbzc.css';
import '../../css/h/hmy4ymk6a.css';
import '../../css/m/mkk5gqbne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qu7egmbzc"/><path clip-rule="evenodd" class="hmy4ymk6a"/><path class="mkk5gqbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:close-wifi"} {...others} />);
}

export default Component;
