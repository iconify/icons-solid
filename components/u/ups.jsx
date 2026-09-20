import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjc_zt5-d.css';
import '../../css/c/cr5oxtb9g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qjc_zt5-d"/><path class="cr5oxtb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ups"} {...others} />);
}

export default Component;
