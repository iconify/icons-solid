import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvd52qb7x.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="pvd52qb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-horizontal-stairs-descend-up"} {...others} />);
}

export default Component;
