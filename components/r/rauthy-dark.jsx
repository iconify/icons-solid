import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk9zn-beg.css';
import '../../css/o/o9cgf80vg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bk9zn-beg"/><path class="o9cgf80vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rauthy-dark"} {...others} />);
}

export default Component;
