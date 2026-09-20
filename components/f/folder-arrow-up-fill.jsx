import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu4ug0b5t.css';
import '../../css/j/j5_39sbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tu4ug0b5t"/><path class="j5_39sbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-arrow-up-fill"} {...others} />);
}

export default Component;
