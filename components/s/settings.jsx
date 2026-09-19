import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/re8lld-el.css';
import '../../css/i/inz9m4wmz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="re8lld-el"/><circle class="inz9m4wmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:settings"} {...others} />);
}

export default Component;
