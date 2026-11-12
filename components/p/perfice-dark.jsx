import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzt09qmjr.css';
import '../../css/n/ny4v3jcym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zzt09qmjr"/><path class="ny4v3jcym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:perfice-dark"} {...others} />);
}

export default Component;
