import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqoppnb6n.css';
import '../../css/c/cv9731b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqoppnb6n"/><path class="cv9731b4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:brightness-half"} {...others} />);
}

export default Component;
