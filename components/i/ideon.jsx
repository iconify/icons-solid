import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcx6q5b0x.css';
import '../../css/k/k5lp20bzk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vcx6q5b0x"/><path class="k5lp20bzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ideon"} {...others} />);
}

export default Component;
