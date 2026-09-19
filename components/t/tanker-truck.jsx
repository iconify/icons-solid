import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z8hbo-a-t.css';
import '../../css/a/a6pgc3car.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z8hbo-a-t"/><path class="a6pgc3car"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tanker-truck"} {...others} />);
}

export default Component;
