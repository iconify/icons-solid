import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4xr0yhpn.css';
import '../../css/f/f2h708bjp.css';
import '../../css/c/c0k_mybxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4xr0yhpn"/><path class="f2h708bjp"/><path class="c0k_mybxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-1-filled"} {...others} />);
}

export default Component;
