import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcc6e0kab.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mcc6e0kab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pulp-project-light"} {...others} />);
}

export default Component;
