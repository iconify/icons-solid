import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvlmg9bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvlmg9bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:external-drive-filled"} {...others} />);
}

export default Component;
