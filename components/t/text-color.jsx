import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9m90l0ie.css';
import '../../css/f/fdgid2obi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o9m90l0ie"/><rect class="fdgid2obi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-color"} {...others} />);
}

export default Component;
