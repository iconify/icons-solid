import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3rsyebkx.css';
import '../../css/y/yt_neeiwa.css';
import '../../css/h/hrnk_n1cr.css';
import '../../css/q/qp3ndol4a.css';
import '../../css/d/d6on-ubft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h3rsyebkx"/><path class="yt_neeiwa"/><circle class="hrnk_n1cr"/><circle class="qp3ndol4a"/><circle class="d6on-ubft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chemistry-light"} {...others} />);
}

export default Component;
