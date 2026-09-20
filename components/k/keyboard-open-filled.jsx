import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t885h7bha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t885h7bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:keyboard-open-filled"} {...others} />);
}

export default Component;
