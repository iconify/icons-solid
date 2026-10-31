import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvvqbqbqn.css';
import '../../css/m/mpl7nldks.css';
import '../../css/v/vbo0ddc0m.css';
import '../../css/b/bh0nrn5dr.css';
import '../../css/l/l02s2-bgl.css';
import '../../css/u/u3xr8l0pa.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="bvvqbqbqn"/><path class="mpl7nldks"/><path class="vbo0ddc0m"/><path class="bh0nrn5dr"/><path class="l02s2-bgl"/><path class="u3xr8l0pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:french-polynesia"} {...others} />);
}

export default Component;
