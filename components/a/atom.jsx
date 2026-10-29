import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgu6wjyip.css';
import '../../css/z/zuw6iabqi.css';
import '../../css/x/x6qygfb_p.css';
import '../../css/u/udb9r-bbn.css';
import '../../css/u/ux0sdfbwt.css';
import '../../css/u/ud2wg7bdn.css';
import '../../css/s/s-hqqd2uu.css';
import '../../css/t/t-fx8ebqt.css';
import '../../css/v/v35oazb4u.css';
import '../../css/u/ujur4021f.css';
import '../../css/d/d028rqq1o.css';
import '../../css/g/gypqpcbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgu6wjyip wm-shadow"/><path class="wm-k zuw6iabqi"/><path class="wm-k x6qygfb_p"/><path class="udb9r-bbn wm-k"/><path class="ux0sdfbwt wm-a"/><path class="ud2wg7bdn wm-a"/><path class="s-hqqd2uu wm-a"/><path class="t-fx8ebqt wm-a"/><path class="v35oazb4u wm-a"/><path class="ujur4021f wm-a"/><path class="d028rqq1o wm-a"/><path class="gypqpcbvh wm-deco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:atom"} {...others} />);
}

export default Component;
