import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2qkbotos.css';
import '../../css/j/j9nhxkbgd.css';
import '../../css/g/gz6fy7bjr.css';
import '../../css/f/ftlm9ha6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g2qkbotos"/><path class="j9nhxkbgd"/><path class="gz6fy7bjr"/><path class="ftlm9ha6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-cpu"} {...others} />);
}

export default Component;
