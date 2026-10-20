import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwinbcbgb.css';
import '../../css/l/lzqdc0rqk.css';
import '../../css/y/yepcn_hpj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qwinbcbgb"/><path class="lzqdc0rqk"/><path class="yepcn_hpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:test-tube-20-bold"} {...others} />);
}

export default Component;
