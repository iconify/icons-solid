import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7uinz_wv.css';
import '../../css/m/my4v-7bwq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g7uinz_wv"/><path class="my4v-7bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:riverside-fm"} {...others} />);
}

export default Component;
