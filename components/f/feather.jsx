import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a294bdbqf.css';
import '../../css/m/ma73edfwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a294bdbqf"/><path class="ma73edfwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:feather"} {...others} />);
}

export default Component;
