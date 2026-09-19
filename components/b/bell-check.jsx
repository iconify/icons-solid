import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3k9861yd.css';
import '../../css/s/sizcdbmji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3k9861yd"/><path class="sizcdbmji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bell-check"} {...others} />);
}

export default Component;
