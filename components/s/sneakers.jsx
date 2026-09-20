import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fk0ip-b6z.css';
import '../../css/l/lj-ejx5zr.css';
import '../../css/i/i178ndbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="fk0ip-b6z"/><path class="lj-ejx5zr"/><path class="i178ndbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:sneakers"} {...others} />);
}

export default Component;
