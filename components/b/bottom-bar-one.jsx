import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/k/k9cv1rbvs.css';
import '../../css/m/msr4e6bsf.css';
import '../../css/n/nakatxb2m.css';
import '../../css/f/f_ebaacko.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="rinuwhlnp"><path class="k9cv1rbvs"/><path class="msr4e6bsf"/><path class="nakatxb2m"/><path class="f_ebaacko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bottom-bar-one"} {...others} />);
}

export default Component;
