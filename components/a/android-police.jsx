import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2bqtbcvs.css';
import '../../css/u/uq8jn4bmu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a2bqtbcvs"/><path class="uq8jn4bmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:android-police"} {...others} />);
}

export default Component;
