import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a266c5e5w.css';
import '../../css/o/o2n9-8bbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a266c5e5w"/><path class="o2n9-8bbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dns"} {...others} />);
}

export default Component;
