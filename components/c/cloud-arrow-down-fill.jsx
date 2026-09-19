import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv5nqpbmb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rv5nqpbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cloud-arrow-down-fill"} {...others} />);
}

export default Component;
