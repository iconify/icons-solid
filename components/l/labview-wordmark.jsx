import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb-_cqblp.css';
import '../../css/g/g5k8wib8i.css';
import '../../css/x/xkrt0vp1g.css';
import '../../css/g/gv0fbehgq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bb-_cqblp"/><path class="g5k8wib8i"/><path class="xkrt0vp1g"/><path class="gv0fbehgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:labview-wordmark"} {...others} />);
}

export default Component;
