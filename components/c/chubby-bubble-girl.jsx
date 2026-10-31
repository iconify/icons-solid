import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fd787wbra.css';
import '../../css/c/ca3k8vqtd.css';
import '../../css/m/mdfnutdnh.css';
import '../../css/e/eeuj4ccnw.css';
import '../../css/n/n0p4ylbjx.css';
import '../../css/e/ehxk8-b1d.css';
import '../../css/f/fb5lscc6a.css';
import '../../css/r/r9uovwb7o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y9tr6bcfx"><path class="fd787wbra"/><path class="ca3k8vqtd"/><path class="mdfnutdnh"/><path class="eeuj4ccnw"/><path class="n0p4ylbjx"/><path class="ehxk8-b1d"/><path class="fb5lscc6a"/><path class="r9uovwb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:chubby-bubble-girl"} {...others} />);
}

export default Component;
