import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<polyline points="2.75 8.75 6.25 12.25 13.25 4.75" class="hntgybcog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:tick"} {...others} />);
}

export default Component;
