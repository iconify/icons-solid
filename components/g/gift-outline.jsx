import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knf-jaczf.css';
import '../../css/z/zakcsrw3t.css';
import '../../css/m/m_hfkybog.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="knf-jaczf"/><rect class="zakcsrw3t"/><path class="m_hfkybog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:gift-outline"} {...others} />);
}

export default Component;
