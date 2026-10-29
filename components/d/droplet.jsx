import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knmkkbbxd.css';
import '../../css/y/yp1z57b0r.css';
import '../../css/c/cep230_ho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="knmkkbbxd"/><path class="yp1z57b0r"/><path class="cep230_ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:droplet"} {...others} />);
}

export default Component;
