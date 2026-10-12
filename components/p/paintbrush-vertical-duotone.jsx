import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo6zw876u.css';
import '../../css/f/fzy50vbde.css';
import '../../css/r/rh3ihcc6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uo6zw876u"/><path class="fzy50vbde"/><path class="rh3ihcc6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:paintbrush-vertical-duotone"} {...others} />);
}

export default Component;
