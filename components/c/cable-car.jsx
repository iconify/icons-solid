import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sz0ei6zup.css';
import '../../css/z/z9jpn_beu.css';
import '../../css/y/y8m0unbnp.css';
import '../../css/n/nz3crbbcj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="sz0ei6zup"/><path class="z9jpn_beu"/><path class="y8m0unbnp"/><path class="nz3crbbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cable-car"} {...others} />);
}

export default Component;
