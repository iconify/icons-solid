import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f0vwz517z.css';
import '../../css/i/ir9d9ob2r.css';
import '../../css/a/alffxlipi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f0vwz517z"/><path class="ir9d9ob2r"/><path class="alffxlipi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:building-complex-plus"} {...others} />);
}

export default Component;
