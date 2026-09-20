import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9i7q_bed.css';
import '../../css/s/s669v5bjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n9i7q_bed"/><path class="s669v5bjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:eye3"} {...others} />);
}

export default Component;
