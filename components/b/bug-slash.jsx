import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7psohbfh.css';
import '../../css/q/q90fv6qec.css';
import '../../css/a/a2wwsgbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o7psohbfh"/><path class="q90fv6qec"/><path class="a2wwsgbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bug-slash"} {...others} />);
}

export default Component;
