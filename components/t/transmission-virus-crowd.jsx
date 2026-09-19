import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/toko7hbjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="toko7hbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-crowd"} {...others} />);
}

export default Component;
