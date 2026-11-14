import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svidcsblb.css';
import '../../css/v/v744t56bw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="svidcsblb"/><path class="v744t56bw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:voidauth-dark"} {...others} />);
}

export default Component;
