import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ma7f2b-py.css';
import '../../css/b/b9mw2hbpj.css';
import '../../css/u/ur9_n9ihi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ma7f2b-py"/><path clip-rule="evenodd" class="b9mw2hbpj"/><path class="ur9_n9ihi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:virtual-reality-flat"} {...others} />);
}

export default Component;
