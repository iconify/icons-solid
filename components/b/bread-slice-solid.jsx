import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-eam-cmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-eam-cmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:bread-slice-solid"} {...others} />);
}

export default Component;
