import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj2n_6b5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj2n_6b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:android-head"} {...others} />);
}

export default Component;
