import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5my-u8du.css';
import '../../css/a/atca9c2ie.css';
import '../../css/t/tp4af3bvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h5my-u8du"/><path class="atca9c2ie"/><path class="tp4af3bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-lumo-light"} {...others} />);
}

export default Component;
