import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckjv9dbko.css';
import '../../css/h/h35m5hcqe.css';
import '../../css/z/ztgnliu0b.css';
import '../../css/k/kd94m1b4e.css';
import '../../css/m/mdpqnwn5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ckjv9dbko"/><path class="h35m5hcqe"/><path class="ztgnliu0b"/><path class="kd94m1b4e"/><path class="mdpqnwn5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:undb"} {...others} />);
}

export default Component;
