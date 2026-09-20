import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r88kw5nfj.css';
import '../../css/k/ktivz12lx.css';
import '../../css/i/i_36s7bas.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r88kw5nfj"/><path class="ktivz12lx"/><path clip-rule="evenodd" class="i_36s7bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:smoking-area-flat"} {...others} />);
}

export default Component;
