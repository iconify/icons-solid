import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/az9839bnb.css';
import '../../css/c/cupn25bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="az9839bnb"/><path class="cupn25bpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bitbucket"} {...others} />);
}

export default Component;
