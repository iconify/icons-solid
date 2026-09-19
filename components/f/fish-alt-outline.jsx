import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjofz1b8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wjofz1b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:fish-alt-outline"} {...others} />);
}

export default Component;
