import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hao7ajn3e.css';
import '../../css/o/o7ez-hcvc.css';
import '../../css/p/pizmkwbbf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hao7ajn3e"/><path class="o7ez-hcvc"/><path class="pizmkwbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radicale"} {...others} />);
}

export default Component;
