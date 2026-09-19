import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wpkgq2ase.css';
import '../../css/i/iwhngdzkj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="wpkgq2ase"/><path class="iwhngdzkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:orbit"} {...others} />);
}

export default Component;
