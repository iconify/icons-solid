import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2-gn2biy.css';
import '../../css/j/j7v_czbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a2-gn2biy"/><path class="j7v_czbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-symlink"} {...others} />);
}

export default Component;
