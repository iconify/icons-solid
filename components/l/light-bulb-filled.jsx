import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx1zgacyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yx1zgacyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:light-bulb-filled"} {...others} />);
}

export default Component;
