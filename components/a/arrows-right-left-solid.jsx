import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwhv55k-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mwhv55k-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrows-right-left-solid"} {...others} />);
}

export default Component;
