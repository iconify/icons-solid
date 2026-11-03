import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/v/v9xhikbmv.css';
import '../../css/q/qcli6r3el.css';
import '../../css/u/uk2m0dkmn.css';
import '../../css/b/bd8l3bdij.css';

const viewBox = {"width":1280,"height":640};
const content = `<g class="kuf42lb8e"><circle transform="matrix(.99728 0 0 1.00556 10.002 -14.823)" class="v9xhikbmv"/><circle transform="matrix(1.01749 0 0 1 -3.158 0)" class="qcli6r3el"/><circle transform="matrix(1.01749 0 0 1 -3.158 115.914)" class="qcli6r3el"/><circle transform="matrix(1.01749 0 0 1 148.43 115.914)" class="qcli6r3el"/><circle transform="matrix(1.01749 0 0 1 148.851 0)" class="qcli6r3el"/><circle transform="matrix(.99196 0 0 1 3.37 -10.246)" class="uk2m0dkmn"/><circle transform="matrix(.99196 0 0 1 255.633 -10.246)" class="uk2m0dkmn"/><path class="bd8l3bdij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:headscale"} {...others} />);
}

export default Component;
