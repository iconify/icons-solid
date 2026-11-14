import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7wgucbag.css';
import '../../css/b/b5e4p7bqw.css';
import '../../css/j/jr1ppjbei.css';
import '../../css/g/g14ipurrp.css';
import '../../css/d/dsy8kl1ak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v7wgucbag"/><circle class="b5e4p7bqw"/><circle class="jr1ppjbei"/><circle class="g14ipurrp"/><path class="dsy8kl1ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-mcs"} {...others} />);
}

export default Component;
