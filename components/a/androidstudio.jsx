import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et8aabb_z.css';
import '../../css/a/akwv6qb5q.css';
import '../../css/v/v539uowyg.css';
import '../../css/o/oqolilywl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="et8aabb_z"/><path class="akwv6qb5q"/><path class="v539uowyg"/><circle class="oqolilywl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:androidstudio"} {...others} />);
}

export default Component;
