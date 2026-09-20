import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko_s50v2q.css';
import '../../css/k/k0au53bzy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ko_s50v2q"/><path class="k0au53bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:laudspeaker"} {...others} />);
}

export default Component;
