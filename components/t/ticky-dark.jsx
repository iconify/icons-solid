import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx46o0t2b.css';
import '../../css/z/zbzbr2c9t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gx46o0t2b"/><path class="zbzbr2c9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ticky-dark"} {...others} />);
}

export default Component;
