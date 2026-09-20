import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mso_j6xqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mso_j6xqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:carnival-shop-bold"} {...others} />);
}

export default Component;
