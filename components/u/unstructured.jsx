import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg8495bbv.css';
import '../../css/z/zdj1fdckx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lg8495bbv"/><path clip-rule="evenodd" class="zdj1fdckx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unstructured"} {...others} />);
}

export default Component;
