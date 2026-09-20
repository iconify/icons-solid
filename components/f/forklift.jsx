import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yznohx6xw.css';
import '../../css/j/jd5tbsb7k.css';
import '../../css/c/cqcpatb5d.css';
import '../../css/o/oqgiolb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yznohx6xw"/><path class="jd5tbsb7k"/><circle class="cqcpatb5d"/><circle class="oqgiolb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forklift"} {...others} />);
}

export default Component;
