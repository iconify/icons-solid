import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-3lhcbzm.css';
import '../../css/k/kvngqrmke.css';
import '../../css/s/s_i4p2bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-3lhcbzm"/><path class="kvngqrmke"/><path class="s_i4p2bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lm"} {...others} />);
}

export default Component;
