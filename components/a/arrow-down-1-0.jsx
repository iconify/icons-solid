import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8gq40bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8gq40bvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:arrow-down-1-0"} {...others} />);
}

export default Component;
