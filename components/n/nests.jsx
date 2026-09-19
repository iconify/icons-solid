import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dkifpkb7f.css';
import '../../css/l/l7jrfnpql.css';
import '../../css/h/h4whgdcny.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="dkifpkb7f"/><path clip-rule="evenodd" class="l7jrfnpql"/><path clip-rule="evenodd" class="h4whgdcny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:nests"} {...others} />);
}

export default Component;
