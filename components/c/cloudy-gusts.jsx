import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1tp2t4qr.css';

const viewBox = {"width":35,"height":24};
const content = `<path class="x1tp2t4qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:cloudy-gusts"} {...others} />);
}

export default Component;
