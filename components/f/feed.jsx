import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uz9gb9bqr.css';
import '../../css/o/o_mo92p9y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><circle class="uz9gb9bqr"/><path class="o_mo92p9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:feed"} {...others} />);
}

export default Component;
