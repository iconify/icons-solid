import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/m/mq_8hme5m.css';
import '../../css/e/exyaah_ct.css';
import '../../css/u/u7n8m5eef.css';
import '../../css/f/f6mf1yb9b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="mq_8hme5m"/><path class="mq_8hme5m"/><path class="exyaah_ct"/><path class="u7n8m5eef"/><path class="f6mf1yb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:block-ten"} {...others} />);
}

export default Component;
