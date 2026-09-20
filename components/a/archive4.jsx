import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/a/ahbiwo_gy.css';
import '../../css/s/sb0jxv7-w.css';
import '../../css/o/omaec45yu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rvymobzlx"/><path class="ahbiwo_gy"/><path class="sb0jxv7-w"/><path class="omaec45yu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:archive4"} {...others} />);
}

export default Component;
