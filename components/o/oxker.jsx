import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh0_e8b5g.css';
import '../../css/s/swlytsb8a.css';
import '../../css/a/a1c6c_bxa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yh0_e8b5g"/><circle class="swlytsb8a"/><path class="a1c6c_bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oxker"} {...others} />);
}

export default Component;
