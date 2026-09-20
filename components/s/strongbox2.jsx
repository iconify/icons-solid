import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/w/wmrwclbxu.css';
import '../../css/o/otmc_piqe.css';
import '../../css/t/tuzq10ybp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rvymobzlx"/><path class="wmrwclbxu"/><path class="otmc_piqe"/><path class="tuzq10ybp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:strongbox2"} {...others} />);
}

export default Component;
