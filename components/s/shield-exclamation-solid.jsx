import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg8fvab-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vg8fvab-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:shield-exclamation-solid"} {...others} />);
}

export default Component;
