import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk_r7tbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk_r7tbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-landscape-filled"} {...others} />);
}

export default Component;
