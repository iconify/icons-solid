import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkwkh496s.css';
import '../../css/u/u8-785b1v.css';
import '../../css/b/bni3nanaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gkwkh496s"/><path class="u8-785b1v"/><path class="bni3nanaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pulp-project"} {...others} />);
}

export default Component;
