import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};
const content = `<polygon points="9.25 1.75 2.75 9.25 7.25 9.75 6.75 14.25 13.25 6.75 8.75 6.25" class="hntgybcog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:lightning-bolt"} {...others} />);
}

export default Component;
