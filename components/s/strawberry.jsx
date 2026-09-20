import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eho014b1l.css';
import '../../css/u/uu19liolj.css';
import '../../css/s/sz-d60bes.css';
import '../../css/k/koy5_9nzr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="eho014b1l"/><path class="uu19liolj"/><path class="sz-d60bes"/><path class="koy5_9nzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:strawberry"} {...others} />);
}

export default Component;
