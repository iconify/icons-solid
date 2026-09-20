import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kes0m9rqa.css';
import '../../css/y/yao-gzbok.css';
import '../../css/v/v580zsb7y.css';
import '../../css/h/hjz91p-6d.css';
import '../../css/w/w530wgbjp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kes0m9rqa"/><path class="yao-gzbok"/><g class="v580zsb7y"><path clip-rule="evenodd" class="hjz91p-6d"/><path class="w530wgbjp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:log-flat"} {...others} />);
}

export default Component;
