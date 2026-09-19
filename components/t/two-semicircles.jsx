import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na-6mk1vc.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="na-6mk1vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:two-semicircles"} {...others} />);
}

export default Component;
