import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h61y9uz1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h61y9uz1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:closet-outline"} {...others} />);
}

export default Component;
