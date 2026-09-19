import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/ow5qbpbcb.css';
import '../../css/t/tq02k9b6e.css';
import '../../css/f/fdwxxem6p.css';
import '../../css/n/na74nrb5b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ow5qbpbcb"/><ellipse class="tq02k9b6e"/><path class="fdwxxem6p"/><path class="na74nrb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:future-build-two"} {...others} />);
}

export default Component;
