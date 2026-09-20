import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1n_l6qgn.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="c1n_l6qgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-stairs-up"} {...others} />);
}

export default Component;
