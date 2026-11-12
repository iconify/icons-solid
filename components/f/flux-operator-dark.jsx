import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljh46-15w.css';
import '../../css/p/p9i-ec0lv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ljh46-15w"/><path class="p9i-ec0lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flux-operator-dark"} {...others} />);
}

export default Component;
