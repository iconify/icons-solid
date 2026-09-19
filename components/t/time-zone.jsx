import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f42gr3bqh.css';
import '../../css/n/n63w7jmfp.css';
import '../../css/b/bq8_86bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f42gr3bqh"/><path class="n63w7jmfp"/><path class="bq8_86bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:time-zone"} {...others} />);
}

export default Component;
