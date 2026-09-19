import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td-iq2oif.css';
import '../../css/d/dq3pidbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td-iq2oif"/><path class="dq3pidbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:washer-filled"} {...others} />);
}

export default Component;
