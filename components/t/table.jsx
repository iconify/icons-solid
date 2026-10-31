import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q8i6dbbuh.css';
import '../../css/b/bdjqbm-ub.css';
import '../../css/c/caum75byk.css';
import '../../css/g/g07d2nb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q8i6dbbuh wm-shadow"/><path class="bdjqbm-ub wm-shadow"/><path class="caum75byk"/><path class="g07d2nb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:table"} {...others} />);
}

export default Component;
