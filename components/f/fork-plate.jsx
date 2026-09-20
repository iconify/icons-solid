import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7tqo39dt.css';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/twzp_-q8h.css';
import '../../css/f/fdg9_jbei.css';
import '../../css/m/mykzoqbnm.css';
import '../../css/a/ax31rcbvh.css';
import '../../css/m/mjqmznlxo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGDiG5SdcJ" class="i7tqo39dt"/></defs><g class="in9d5ac6n"><use href="#SVGDiG5SdcJ"/><use href="#SVGDiG5SdcJ"/><path class="twzp_-q8h"/><g class="fdg9_jbei"><path class="mykzoqbnm"/><path class="ax31rcbvh"/></g><path class="mjqmznlxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fork-plate"} {...others} />);
}

export default Component;
