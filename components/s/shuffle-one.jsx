import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfb_6ybbl.css';
import '../../css/i/ih08m4bpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kfb_6ybbl"/><path class="ih08m4bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:shuffle-one"} {...others} />);
}

export default Component;
