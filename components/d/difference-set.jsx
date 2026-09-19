import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/j/jg8uifn_h.css';
import '../../css/c/clthf6bcq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="jg8uifn_h"/><path class="clthf6bcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:difference-set"} {...others} />);
}

export default Component;
