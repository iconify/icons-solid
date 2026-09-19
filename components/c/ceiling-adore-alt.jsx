import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gse3s6bul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gse3s6bul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ceiling-adore-alt"} {...others} />);
}

export default Component;
