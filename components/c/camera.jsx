import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8z-nko1c.css';
import '../../css/s/shaguj4ln.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="v8z-nko1c"/><circle class="shaguj4ln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:camera"} {...others} />);
}

export default Component;
