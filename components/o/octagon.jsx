import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<polygon points="5.25 1.75 10.75 1.75 14.25 5.25 14.25 10.75 10.75 14.25 5.25 14.25 1.75 10.75 1.75 5.25" class="hntgybcog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:octagon"} {...others} />);
}

export default Component;
