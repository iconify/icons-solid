import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/x/xr8ziu2ag.css';
import '../../css/a/a31qyebym.css';
import '../../css/m/mm9e_xqhy.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="xr8ziu2ag"/><path class="a31qyebym"/><path class="mm9e_xqhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cyprus"} {...others} />);
}

export default Component;
