import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/svayl4duz.css';
import '../../css/c/czyvgz04t.css';
import '../../css/r/rqzehnbrk.css';
import '../../css/r/rbffrjbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="svayl4duz"/><path class="czyvgz04t"/><path class="rqzehnbrk"/><path class="rbffrjbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:audio-lines"} {...others} />);
}

export default Component;
