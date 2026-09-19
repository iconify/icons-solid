import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uya9hk5sf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uya9hk5sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:taco-filled"} {...others} />);
}

export default Component;
