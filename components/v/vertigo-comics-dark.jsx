import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2aedl7_f.css';
import '../../css/z/zg93_j8hp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h2aedl7_f"/><path class="zg93_j8hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vertigo-comics-dark"} {...others} />);
}

export default Component;
