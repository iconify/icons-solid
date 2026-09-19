import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/gtt37jryw.css';
import '../../css/w/w260_6bbu.css';
import '../../css/r/rqx6rkwdh.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsAv0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsAv0)"><path class="gtt37jryw"/><path class="w260_6bbu"/><path class="rqx6rkwdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:av"} {...others} />);
}

export default Component;
