import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6pfchbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e6pfchbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sign-filled"} {...others} />);
}

export default Component;
