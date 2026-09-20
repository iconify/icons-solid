import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ah5r38ypk.css';
import '../../css/i/ihzhbpbft.css';
import '../../css/e/emw08xbaa.css';
import '../../css/d/do86j2wah.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ah5r38ypk"/><path class="ihzhbpbft"/><path class="emw08xbaa"/><path class="do86j2wah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:password-lock"} {...others} />);
}

export default Component;
