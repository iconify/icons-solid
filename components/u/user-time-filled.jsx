import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg3nfg2gw.css';
import '../../css/z/zhypwob1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cg3nfg2gw"/><path class="zhypwob1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-time-filled"} {...others} />);
}

export default Component;
