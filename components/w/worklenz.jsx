import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsb9y4bou.css';
import '../../css/g/gwtyn9bdy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dsb9y4bou"/><path class="gwtyn9bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:worklenz"} {...others} />);
}

export default Component;
