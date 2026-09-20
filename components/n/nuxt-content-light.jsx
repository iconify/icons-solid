import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7i7rq6dt.css';
import '../../css/p/pbqykbbtr.css';
import '../../css/t/te70mh0qt.css';
import '../../css/p/plgj7kbye.css';
import '../../css/v/vo5tj0bbe.css';

const viewBox = {"width":257,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d7i7rq6dt"/><path class="pbqykbbtr"/><path clip-rule="evenodd" class="te70mh0qt"/><path class="plgj7kbye"/><path clip-rule="evenodd" class="vo5tj0bbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nuxt-content-light"} {...others} />);
}

export default Component;
