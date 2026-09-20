import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zojxdwbqb.css';
import '../../css/q/qwul8q85w.css';
import '../../css/v/v_6rscepq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zojxdwbqb"/><path class="qwul8q85w"/><path class="v_6rscepq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bitcoin-refresh"} {...others} />);
}

export default Component;
