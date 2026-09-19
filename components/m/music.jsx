import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnjbnob5h.css';
import '../../css/j/jnc96we_h.css';
import '../../css/o/ogzf3qbmf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="vnjbnob5h"/><ellipse class="jnc96we_h"/><ellipse class="ogzf3qbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:music"} {...others} />);
}

export default Component;
