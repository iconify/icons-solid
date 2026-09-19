import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<polygon points="8 1.75 5.75 5.75 1.75 6.25 4.75 9.75 3.75 14.25 8 12.25 12.25 14.25 11.25 9.75 14.25 6.25 10.25 5.75" class="hntgybcog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:star"} {...others} />);
}

export default Component;
