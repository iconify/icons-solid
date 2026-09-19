import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utoaypbgw.css';
import '../../css/j/jde3sccsw.css';
import '../../css/e/enjpuw_xz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="utoaypbgw"/><path class="jde3sccsw"/><circle class="enjpuw_xz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:audio-file"} {...others} />);
}

export default Component;
