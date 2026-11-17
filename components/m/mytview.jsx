import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maehpb1hl.css';
import '../../css/o/ouy5zcixh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="maehpb1hl"/><path class="ouy5zcixh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mytview"} {...others} />);
}

export default Component;
