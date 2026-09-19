import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<polygon points="1.75 1.75 14.25 1.75 14.25 3.25 9.25 8.75 9.25 12.75 6.75 14.25 6.75 8.75 1.75 3.25" class="hntgybcog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:filter"} {...others} />);
}

export default Component;
