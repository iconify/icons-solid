import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r-kinobif.css';
import '../../css/q/qrnzx23eu.css';
import '../../css/l/ltp3o44gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r-kinobif"/><path class="qrnzx23eu"/><path class="ltp3o44gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tasks"} {...others} />);
}

export default Component;
