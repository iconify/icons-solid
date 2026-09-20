import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nb2dq427q.css';
import '../../css/f/fj-0-lbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nb2dq427q"/><path class="fj-0-lbmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:edit"} {...others} />);
}

export default Component;
