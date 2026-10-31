import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr8ohcc6r.css';
import '../../css/g/gsazuob2v.css';
import '../../css/y/ytm2n1ogb.css';
import '../../css/s/snk62fbar.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="jr8ohcc6r"/><path class="gsazuob2v"/><path class="ytm2n1ogb"/><path class="snk62fbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:singapore"} {...others} />);
}

export default Component;
