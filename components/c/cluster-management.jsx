import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkacrgbkn.css';
import '../../css/f/fhr0udsbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xkacrgbkn"/><path class="fhr0udsbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cluster-management"} {...others} />);
}

export default Component;
