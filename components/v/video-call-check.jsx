import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mid5d7o1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mid5d7o1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:video-call-check"} {...others} />);
}

export default Component;
