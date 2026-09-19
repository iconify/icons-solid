import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfq_j5bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pfq_j5bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:plus-circle-solid"} {...others} />);
}

export default Component;
