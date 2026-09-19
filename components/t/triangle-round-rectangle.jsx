import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/w/wfgblghof.css';
import '../../css/j/jz_ctggda.css';
import '../../css/t/ttkz8cc9i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="wfgblghof"/><path class="jz_ctggda"/><path class="ttkz8cc9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:triangle-round-rectangle"} {...others} />);
}

export default Component;
