import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfyvv4ilo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nfyvv4ilo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shipping-box-1-remix"} {...others} />);
}

export default Component;
