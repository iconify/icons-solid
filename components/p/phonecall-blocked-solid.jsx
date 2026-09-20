import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzfrftnrw.css';
import '../../css/c/c11vxbbls.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qzfrftnrw"/><path clip-rule="evenodd" class="c11vxbbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:phonecall-blocked-solid"} {...others} />);
}

export default Component;
