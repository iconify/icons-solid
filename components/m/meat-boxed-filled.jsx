import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v36ogrb8e.css';
import '../../css/c/c4-96kq0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v36ogrb8e"/><path class="c4-96kq0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:meat-boxed-filled"} {...others} />);
}

export default Component;
