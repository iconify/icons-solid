import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3fw97bqp.css';
import '../../css/q/q__pyacab.css';
import '../../css/z/z2qq6bcoa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h3fw97bqp"/><path clip-rule="evenodd" class="q__pyacab"/><path class="z2qq6bcoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:closed-umbrella"} {...others} />);
}

export default Component;
