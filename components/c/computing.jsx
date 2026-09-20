import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-237obdx.css';
import '../../css/i/ik6jiparn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-237obdx"/><path class="ik6jiparn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:computing"} {...others} />);
}

export default Component;
