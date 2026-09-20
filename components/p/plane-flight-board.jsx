import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fk3pwbceq.css';
import '../../css/m/m7ti5p94b.css';
import '../../css/y/y_5jxxbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fk3pwbceq"/><path class="m7ti5p94b"/><path class="y_5jxxbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:plane-flight-board"} {...others} />);
}

export default Component;
