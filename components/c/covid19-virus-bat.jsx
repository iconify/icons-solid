import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgtkisv0g.css';
import '../../css/m/ml_yym6-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pgtkisv0g"/><path class="ml_yym6-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-bat"} {...others} />);
}

export default Component;
