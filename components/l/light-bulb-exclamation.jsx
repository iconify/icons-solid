import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuqogfllb.css';
import '../../css/z/z2amuho-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuqogfllb"/><path clip-rule="evenodd" class="z2amuho-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:light-bulb-exclamation"} {...others} />);
}

export default Component;
