import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkacgwkry.css';
import '../../css/g/gilleue9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkacgwkry"/><path class="gilleue9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shop-like-bold"} {...others} />);
}

export default Component;
