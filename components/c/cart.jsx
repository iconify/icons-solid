import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mr9mvfbsp.css';
import '../../css/i/incllrbwl.css';
import '../../css/e/e2lc3dbws.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="mr9mvfbsp"/><circle class="incllrbwl"/><circle class="e2lc3dbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:cart"} {...others} />);
}

export default Component;
