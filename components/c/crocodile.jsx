import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2bgocb9a.css';
import '../../css/f/fne9igb5l.css';
import '../../css/t/tuu7tm3bw.css';
import '../../css/w/wkue1tbgt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="r2bgocb9a"/><path class="fne9igb5l"/><path class="tuu7tm3bw"/><path class="wkue1tbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crocodile"} {...others} />);
}

export default Component;
