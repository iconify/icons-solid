import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2midr-dj.css';
import '../../css/u/uk8fi2bow.css';
import '../../css/c/crvrn-wsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="c2midr-dj"/><path class="uk8fi2bow"/><rect class="crvrn-wsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:between-vertical-start"} {...others} />);
}

export default Component;
