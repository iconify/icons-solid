import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4ed2vbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y4ed2vbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:currency-pound-solid"} {...others} />);
}

export default Component;
