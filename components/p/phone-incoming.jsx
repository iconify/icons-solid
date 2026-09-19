import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v42ex0_-k.css';
import '../../css/z/z0ygq5b8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v42ex0_-k"/><path class="z0ygq5b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:phone-incoming"} {...others} />);
}

export default Component;
