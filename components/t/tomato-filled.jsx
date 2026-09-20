import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/posi6w9sk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="posi6w9sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tomato-filled"} {...others} />);
}

export default Component;
