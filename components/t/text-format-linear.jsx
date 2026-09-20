import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/majmwhrqy.css';
import '../../css/o/ost3o95wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="majmwhrqy"/><path class="ost3o95wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-format-linear"} {...others} />);
}

export default Component;
