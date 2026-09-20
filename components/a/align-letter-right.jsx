import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s31lv9kcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s31lv9kcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:align-letter-right"} {...others} />);
}

export default Component;
