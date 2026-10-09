import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4enznbyj.css';
import '../../css/k/kjieaf7cx.css';
import '../../css/p/pvg5xqbkw.css';
import '../../css/y/y99owegkb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x4enznbyj"/><path class="kjieaf7cx"/><path class="pvg5xqbkw"/><path class="y99owegkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:multimeter-20-bold"} {...others} />);
}

export default Component;
