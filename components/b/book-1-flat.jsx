import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj4a88b0u.css';
import '../../css/v/vsr6o6bqu.css';
import '../../css/d/d7rrlf06l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mj4a88b0u"/><path clip-rule="evenodd" class="vsr6o6bqu"/><path class="d7rrlf06l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:book-1-flat"} {...others} />);
}

export default Component;
