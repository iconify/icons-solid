import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/utgs_bbxu.css';
import '../../css/v/vzeg9ib-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="utgs_bbxu"/><path class="vzeg9ib-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-hashtag"} {...others} />);
}

export default Component;
