import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggqxp-m1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggqxp-m1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:store-filled"} {...others} />);
}

export default Component;
