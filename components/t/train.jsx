import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u93j8vb4e.css';
import '../../css/g/gt31b3bhs.css';
import '../../css/s/sck3zabtz.css';
import '../../css/a/azq9s59kw.css';
import '../../css/j/j3p_tbbha.css';
import '../../css/v/vmqd5d75a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u93j8vb4e"/><path class="gt31b3bhs"/><path class="sck3zabtz"/><path class="azq9s59kw"/><path class="j3p_tbbha"/><path class="vmqd5d75a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:train"} {...others} />);
}

export default Component;
