import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps1rxzboz.css';
import '../../css/n/nug-zhhlz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ps1rxzboz"/><path class="nug-zhhlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:qr-scan"} {...others} />);
}

export default Component;
