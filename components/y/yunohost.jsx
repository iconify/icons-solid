import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k88q8qb5o.css';
import '../../css/o/o250bhbog.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k88q8qb5o"/><path class="o250bhbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:yunohost"} {...others} />);
}

export default Component;
