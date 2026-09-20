import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we8ztxbnv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="we8ztxbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calibre-web-light"} {...others} />);
}

export default Component;
