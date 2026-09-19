import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2qvr34yk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s2qvr34yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:phone-xmark-solid"} {...others} />);
}

export default Component;
