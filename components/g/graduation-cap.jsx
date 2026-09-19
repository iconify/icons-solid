import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwwn-tela.css';

const viewBox = {"width":2304,"height":1536};
const content = `<path class="nwwn-tela"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:graduation-cap"} {...others} />);
}

export default Component;
