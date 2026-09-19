import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8lnf7b_p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l8lnf7b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:surrealdb"} {...others} />);
}

export default Component;
