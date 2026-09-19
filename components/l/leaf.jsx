import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/utx-e-b7u.css';
import '../../css/r/rw748ybzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="utx-e-b7u"/><path class="rw748ybzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:leaf"} {...others} />);
}

export default Component;
