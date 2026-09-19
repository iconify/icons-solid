import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2-tk3beh.css';
import '../../css/m/my7j9r31x.css';
import '../../css/j/jvw28gbdo.css';
import '../../css/v/vmlmfg8oq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g2-tk3beh"/><path class="my7j9r31x"/><path class="jvw28gbdo"/><path class="vmlmfg8oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:printer"} {...others} />);
}

export default Component;
