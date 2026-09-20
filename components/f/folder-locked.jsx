import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfp3zcp8d.css';
import '../../css/u/uomoltbpf.css';
import '../../css/a/ae_julbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hfp3zcp8d"/><path class="uomoltbpf"/><path class="ae_julbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-locked"} {...others} />);
}

export default Component;
