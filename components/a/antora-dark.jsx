import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp5s9ylyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bp5s9ylyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:antora-dark"} {...others} />);
}

export default Component;
