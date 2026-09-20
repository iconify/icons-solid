import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu_ca8b3i.css';
import '../../css/r/r-h8u5bob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uu_ca8b3i"/><path class="r-h8u5bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:instagram-logo-bold"} {...others} />);
}

export default Component;
