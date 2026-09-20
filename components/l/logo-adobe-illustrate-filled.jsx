import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4xr0yhpn.css';
import '../../css/w/wxkzprrkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4xr0yhpn"/><path class="wxkzprrkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-adobe-illustrate-filled"} {...others} />);
}

export default Component;
