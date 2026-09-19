import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/b19tqsban.css';
import '../../css/j/jgxrsjbxi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="b19tqsban"/><rect class="jgxrsjbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:palm"} {...others} />);
}

export default Component;
