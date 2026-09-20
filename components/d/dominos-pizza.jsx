import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io4qvkb2o.css';
import '../../css/g/g4cgbhb9g.css';
import '../../css/z/z2xkpqbil.css';
import '../../css/o/o6n8xybdf.css';

const viewBox = {"width":1000,"height":209.346};
const content = `<path class="io4qvkb2o"/><path class="g4cgbhb9g"/><path class="z2xkpqbil"/><path class="o6n8xybdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dominos-pizza"} {...others} />);
}

export default Component;
