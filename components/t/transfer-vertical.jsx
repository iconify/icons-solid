import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu0re_lux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu0re_lux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transfer-vertical"} {...others} />);
}

export default Component;
