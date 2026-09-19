import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2k121bbm.css';
import '../../css/v/v-w2i5hqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2k121bbm"/><path class="v-w2i5hqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:eye"} {...others} />);
}

export default Component;
