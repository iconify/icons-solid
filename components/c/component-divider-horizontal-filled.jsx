import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny93yw8fe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ny93yw8fe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:component-divider-horizontal-filled"} {...others} />);
}

export default Component;
