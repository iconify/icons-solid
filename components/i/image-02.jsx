import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/janyzvilq.css';
import '../../css/g/gowt0db6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="janyzvilq"/><path class="gowt0db6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-02"} {...others} />);
}

export default Component;
