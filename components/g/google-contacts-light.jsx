import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9a_esbwi.css';
import '../../css/s/sk-8-kkto.css';
import '../../css/w/we___fbjz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a9a_esbwi"/><path class="sk-8-kkto"/><path class="we___fbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-contacts-light"} {...others} />);
}

export default Component;
