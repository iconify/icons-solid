import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ehe-29bek.css';
import '../../css/p/prudicchg.css';
import '../../css/e/e3tzvnbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="ehe-29bek"/><rect class="prudicchg"/><path class="e3tzvnbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:calculator"} {...others} />);
}

export default Component;
