import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcd13orep.css';
import '../../css/z/zs9x5hotx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kcd13orep"/><path class="zs9x5hotx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mongodb-light"} {...others} />);
}

export default Component;
