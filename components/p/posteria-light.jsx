import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smlohmbtr.css';
import '../../css/u/u79s_5bes.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="smlohmbtr"/><path class="u79s_5bes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posteria-light"} {...others} />);
}

export default Component;
