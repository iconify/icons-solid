import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tytuppbws.css';
import '../../css/e/edp-a4blw.css';
import '../../css/z/z87r79bhv.css';
import '../../css/q/q01mz1cnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tytuppbws"/><path class="edp-a4blw"/><path class="z87r79bhv"/><path class="q01mz1cnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:email-filled"} {...others} />);
}

export default Component;
