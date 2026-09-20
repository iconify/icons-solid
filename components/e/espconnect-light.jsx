import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rok_s9ahy.css';
import '../../css/b/b4_i_1h2r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rok_s9ahy"/><path class="b4_i_1h2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:espconnect-light"} {...others} />);
}

export default Component;
