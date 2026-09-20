import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvm8evbio.css';
import '../../css/z/z9687bcgq.css';
import '../../css/k/ksdi_7b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvm8evbio"/><path class="z9687bcgq"/><path clip-rule="evenodd" class="ksdi_7b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pencil-single-duotone"} {...others} />);
}

export default Component;
