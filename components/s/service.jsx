import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/k/k6r1xbcuo.css';
import '../../css/s/s4llbr6zy.css';
import '../../css/q/q-3sfjbzw.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="k6r1xbcuo"/><path class="s4llbr6zy"/><path class="q-3sfjbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:service"} {...others} />);
}

export default Component;
