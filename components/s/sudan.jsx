import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/p/plw4my99i.css';
import '../../css/n/ndsoh9bgy.css';
import '../../css/w/w4lc2xbcv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="plw4my99i"/><path class="ndsoh9bgy"/><path class="w4lc2xbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sudan"} {...others} />);
}

export default Component;
