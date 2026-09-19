import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/c/ca3oflbdp.css';
import '../../css/g/gx8mphfqp.css';
import '../../css/f/fa3pa8bch.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ca3oflbdp"/><path class="gx8mphfqp"/><path class="fa3pa8bch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:protection"} {...others} />);
}

export default Component;
