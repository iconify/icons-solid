import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szku-lbwj.css';
import '../../css/z/zij8omb8i.css';
import '../../css/y/yt0_-0n4r.css';
import '../../css/n/n91xhwb1p.css';
import '../../css/n/nyvku37ko.css';
import '../../css/f/fa26uhbxk.css';
import '../../css/t/tfp12mwnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szku-lbwj wm-shadow"/><path class="wm-k zij8omb8i"/><path class="wm-k yt0_-0n4r"/><path class="n91xhwb1p wm-k"/><path class="nyvku37ko wm-k"/><path class="fa26uhbxk wm-k"/><path class="tfp12mwnq wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-left-right"} {...others} />);
}

export default Component;
