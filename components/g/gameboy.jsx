import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/rs5edjbjh.css';
import '../../css/k/ka0jv7b7u.css';
import '../../css/o/o8fe4gbie.css';
import '../../css/h/h09xi7obi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="rs5edjbjh"/><path class="ka0jv7b7u"/><path class="o8fe4gbie"/><path class="h09xi7obi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:gameboy"} {...others} />);
}

export default Component;
