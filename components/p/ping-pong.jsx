import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkzkbyboz.css';
import '../../css/b/br5p98b4q.css';
import '../../css/h/hjo-bob9g.css';
import '../../css/o/o36krobqg.css';
import '../../css/m/mt8w238-e.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zzwwpix8g.css';
import '../../css/n/ncimcywjq.css';
import '../../css/j/jppodacjs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zkzkbyboz"/><path class="br5p98b4q"/><path class="hjo-bob9g"/><path class="o36krobqg"/><circle class="mt8w238-e"/><g class="jn8qy4bru"><path class="zzwwpix8g"/><path class="ncimcywjq"/><circle class="jppodacjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ping-pong"} {...others} />);
}

export default Component;
