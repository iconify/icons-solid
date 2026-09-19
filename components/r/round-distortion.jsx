import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/j/jzp97ibqw.css';
import '../../css/n/n_1rlib_h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><circle class="kb9zbkb1z"/><path class="jzp97ibqw"/><path class="n_1rlib_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:round-distortion"} {...others} />);
}

export default Component;
