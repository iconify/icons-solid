import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/ciziwtbzu.css';
import '../../css/z/zg2kuvbcb.css';
import '../../css/p/p1hhowniu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="ciziwtbzu"/><path class="zg2kuvbcb"/><path class="p1hhowniu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:moneys"} {...others} />);
}

export default Component;
