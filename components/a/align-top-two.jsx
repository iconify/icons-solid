import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/p/pyk5uu4ad.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/m/m-5tr2bwm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><rect class="pyk5uu4ad"/><rect class="kw7ez0beo"/><rect class="m-5tr2bwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-top-two"} {...others} />);
}

export default Component;
