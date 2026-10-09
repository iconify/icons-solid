import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgngpzqfl.css';
import '../../css/p/pf54fdcpd.css';
import '../../css/e/eojx1yb7v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pgngpzqfl"/><path class="pf54fdcpd"/><path class="eojx1yb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-merge-48-bold"} {...others} />);
}

export default Component;
