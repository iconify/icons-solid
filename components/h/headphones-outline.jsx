import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek-nq_bap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ek-nq_bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:headphones-outline"} {...others} />);
}

export default Component;
