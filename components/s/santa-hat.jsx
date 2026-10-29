import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzfbntjfs.css';
import '../../css/w/w7szn6bwt.css';
import '../../css/q/quz6zh85f.css';
import '../../css/c/cfyk-ob4r.css';
import '../../css/q/q5gq4xbnp.css';
import '../../css/k/kd2xjjbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzfbntjfs wm-k"/><path class="w7szn6bwt wm-k"/><path class="quz6zh85f wm-a"/><path class="cfyk-ob4r wm-a"/><path class="q5gq4xbnp wm-k"/><path class="kd2xjjbgt wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:santa-hat"} {...others} />);
}

export default Component;
