import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io9_9gbtr.css';
import '../../css/k/koafcjh_f.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="io9_9gbtr"/><path class="koafcjh_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:excaliself"} {...others} />);
}

export default Component;
