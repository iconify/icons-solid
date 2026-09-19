import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-nqjvbzj.css';
import '../../css/p/pz6l3xh3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-nqjvbzj"/><path class="pz6l3xh3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:factory-01"} {...others} />);
}

export default Component;
