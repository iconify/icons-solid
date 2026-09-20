import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/m/mntwwlban.css';
import '../../css/r/rb7nm4b1k.css';

const viewBox = {"width":256,"height":256};
const content = `<g clip-rule="evenodd" class="nx5d-bc1s"><path class="mntwwlban"/><path class="rb7nm4b1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:documenso-dark"} {...others} />);
}

export default Component;
