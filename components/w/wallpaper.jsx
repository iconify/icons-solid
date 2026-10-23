import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/imij7qb8m.css';
import '../../css/j/jlylghjod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="imij7qb8m"/><path class="jlylghjod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:wallpaper"} {...others} />);
}

export default Component;
