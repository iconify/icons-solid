import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfhiarb1q.css';
import '../../css/n/nx5d-bc1s.css';
import '../../css/x/xbragqbkw.css';
import '../../css/p/phrr0cbor.css';
import '../../css/v/v30kfmvfo.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="vfhiarb1q"/><g class="nx5d-bc1s"><path class="xbragqbkw"/><path class="phrr0cbor"/><path class="v30kfmvfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:seonib"} {...others} />);
}

export default Component;
