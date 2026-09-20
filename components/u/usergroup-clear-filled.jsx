import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/racnh6jjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="racnh6jjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:usergroup-clear-filled"} {...others} />);
}

export default Component;
