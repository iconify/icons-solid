import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vho_s5bgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vho_s5bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:share-location-hand-bold"} {...others} />);
}

export default Component;
