import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54fotb1f.css';
import '../../css/o/obtq3bw8r.css';
import '../../css/t/th81deifi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="g54fotb1f"><path clip-rule="evenodd" class="obtq3bw8r"/><path class="th81deifi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:circle-four"} {...others} />);
}

export default Component;
