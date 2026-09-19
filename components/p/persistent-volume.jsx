import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3ckgebfq.css';
import '../../css/x/xda2a_cpg.css';
import '../../css/q/qo15eky2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3ckgebfq"/><path class="xda2a_cpg"/><circle class="qo15eky2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:persistent-volume"} {...others} />);
}

export default Component;
