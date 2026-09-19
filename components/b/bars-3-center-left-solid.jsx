import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuo1t367k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cuo1t367k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bars-3-center-left-solid"} {...others} />);
}

export default Component;
