import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9vm3113w.css';
import '../../css/n/nga9fqpvv.css';
import '../../css/p/pzqb4kb6y.css';
import '../../css/m/m2da_cgah.css';
import '../../css/e/ekvd14b6x.css';
import '../../css/e/ez9jcpjax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y9vm3113w"/><path class="nga9fqpvv"/><path class="pzqb4kb6y"/><path class="m2da_cgah"/><path class="ekvd14b6x"/><path class="ez9jcpjax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pufferfish-host"} {...others} />);
}

export default Component;
