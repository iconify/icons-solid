import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/bmfy1bdgs.css';
import '../../css/e/ei8tu2b9q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="bmfy1bdgs"/><path class="ei8tu2b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:water"} {...others} />);
}

export default Component;
