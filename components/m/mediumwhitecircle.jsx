import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3p8w_7pg.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="m3p8w_7pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mediumwhitecircle"} {...others} />);
}

export default Component;
