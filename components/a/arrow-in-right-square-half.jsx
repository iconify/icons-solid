import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukw4jy4tx.css';
import '../../css/s/sgoebkv5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukw4jy4tx"/><path class="sgoebkv5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-right-square-half"} {...others} />);
}

export default Component;
