import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-w-40guh.css';
import '../../css/f/fr59-4bgr.css';
import '../../css/o/o2kdw8bhg.css';
import '../../css/j/jea0febxj.css';
import '../../css/p/p63dztbyc.css';
import '../../css/b/bvz2nrbts.css';
import '../../css/d/d55daeexs.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="n-w-40guh"/><path class="fr59-4bgr"/><path class="o2kdw8bhg"/><path class="jea0febxj"/><circle class="p63dztbyc"/><circle class="bvz2nrbts"/><circle class="d55daeexs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wintertrace"} {...others} />);
}

export default Component;
