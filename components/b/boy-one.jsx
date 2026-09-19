import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/bshyy_b6k.css';
import '../../css/o/otz1-ez0v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><circle class="bshyy_b6k"/><path class="otz1-ez0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boy-one"} {...others} />);
}

export default Component;
