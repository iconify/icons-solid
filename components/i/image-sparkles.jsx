import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cjm1k9bnw.css';
import '../../css/j/jo3e9tbrh.css';
import '../../css/h/hctiedccp.css';
import '../../css/s/snolryeou.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';
import '../../css/q/qdzstlt9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cjm1k9bnw"/><path class="jo3e9tbrh"/><path class="hctiedccp wm-s"/><path class="snolryeou wm-shine"/><path class="ain1tnbxt wm-k"/><path class="sy7kpcbuo wm-a"/><path class="qdzstlt9t wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:image-sparkles"} {...others} />);
}

export default Component;
