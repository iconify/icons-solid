import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttnu0-bxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttnu0-bxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:compass-filled"} {...others} />);
}

export default Component;
