import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zurlrabfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zurlrabfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:number-2-square-solid"} {...others} />);
}

export default Component;
