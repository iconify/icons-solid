import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz190sbsc.css';
import '../../css/v/vv4e-qbeo.css';
import '../../css/n/nvzxc_b8q.css';
import '../../css/u/uk0r5dbhf.css';
import '../../css/f/f-06w7b8a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kz190sbsc"/><path class="vv4e-qbeo"/><path class="nvzxc_b8q"/><path class="uk0r5dbhf"/><path class="f-06w7b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bichon-light"} {...others} />);
}

export default Component;
