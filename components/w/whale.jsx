import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4i6dabiz.css';
import '../../css/i/itsk313tz.css';
import '../../css/h/he1sk-rbq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a4i6dabiz"/><path class="itsk313tz"/><circle class="he1sk-rbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:whale"} {...others} />);
}

export default Component;
