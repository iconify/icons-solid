import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-sjb4b8r.css';
import '../../css/h/h4k3stb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-sjb4b8r"/><path class="h4k3stb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:book-close-bookmark-1"} {...others} />);
}

export default Component;
