import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q__ikjbpe.css';
import '../../css/u/u53z4igoa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q__ikjbpe"/><path class="u53z4igoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-voice"} {...others} />);
}

export default Component;
