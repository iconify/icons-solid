import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwhh8jslo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwhh8jslo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:phone-cancel-outline"} {...others} />);
}

export default Component;
