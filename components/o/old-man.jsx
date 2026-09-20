import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azr9tnz5l.css';
import '../../css/w/wkywe6bfy.css';
import '../../css/a/abi8ticwi.css';
import '../../css/v/v0211bszy.css';
import '../../css/t/tdke8cbot.css';
import '../../css/i/i5aur64oq.css';
import '../../css/u/uwl-_tbeb.css';
import '../../css/z/zjq5nfybb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="azr9tnz5l"/><path class="wkywe6bfy"/><path class="abi8ticwi"/><path class="v0211bszy"/><path class="tdke8cbot"/><path class="i5aur64oq"/><path class="uwl-_tbeb"/><path class="zjq5nfybb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:old-man"} {...others} />);
}

export default Component;
