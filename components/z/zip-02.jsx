import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9uu65b9i.css';
import '../../css/h/hpd6wbb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p9uu65b9i"/><path class="hpd6wbb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zip-02"} {...others} />);
}

export default Component;
