import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvq8f1wlj.css';
import '../../css/j/jxmx0qioi.css';
import '../../css/h/h3xl-d1kj.css';
import '../../css/n/nghmr-zxx.css';
import '../../css/s/spr6fg90x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvq8f1wlj"/><path clip-rule="evenodd" class="jxmx0qioi"/><path class="h3xl-d1kj"/><path clip-rule="evenodd" class="nghmr-zxx"/><path class="spr6fg90x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ncdt"} {...others} />);
}

export default Component;
