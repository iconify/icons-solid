import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymv2uu5iv.css';
import '../../css/a/aj9cdbcjg.css';
import '../../css/a/a5ps3ubbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ymv2uu5iv"/><path class="aj9cdbcjg"/><path class="a5ps3ubbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:star-award-01"} {...others} />);
}

export default Component;
