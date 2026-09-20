import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl1h7tboi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kl1h7tboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:view-document-files-solid"} {...others} />);
}

export default Component;
