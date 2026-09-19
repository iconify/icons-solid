import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx-1oj1vb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cx-1oj1vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:medal-solid"} {...others} />);
}

export default Component;
