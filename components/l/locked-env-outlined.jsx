import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlzjfpbie.css';
import '../../css/w/wode1sbbf.css';
import '../../css/t/t3m92_bgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlzjfpbie"/><path class="wode1sbbf"/><path class="t3m92_bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:locked-env-outlined"} {...others} />);
}

export default Component;
