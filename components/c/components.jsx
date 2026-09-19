import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/a/a32apgb_s.css';
import '../../css/h/htubz2biz.css';
import '../../css/o/okw__sobm.css';
import '../../css/h/h45--h21m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="a32apgb_s"/><path class="htubz2biz"/><path class="okw__sobm"/><path class="h45--h21m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:components"} {...others} />);
}

export default Component;
