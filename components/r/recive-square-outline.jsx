import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8eqfsbjd.css';
import '../../css/e/e-4ze4bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v8eqfsbjd"/><path clip-rule="evenodd" class="e-4ze4bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:recive-square-outline"} {...others} />);
}

export default Component;
