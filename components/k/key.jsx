import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b7jdspq0c.css';
import '../../css/x/xi0idpw6x.css';
import '../../css/f/f7ejgn5dp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="b7jdspq0c"/><path class="xi0idpw6x"/><path class="f7ejgn5dp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:key"} {...others} />);
}

export default Component;
