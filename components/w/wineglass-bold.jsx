import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucsituugr.css';
import '../../css/n/nfab9gbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ucsituugr"/><path class="nfab9gbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-bold"} {...others} />);
}

export default Component;
