import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/g/gh2q01cwc.css';
import '../../css/a/a8pybib1r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="gh2q01cwc"/><path class="a8pybib1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bad-two"} {...others} />);
}

export default Component;
