import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcc5x3bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bcc5x3bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:line-arrow-transfer-horizontal-1-remix"} {...others} />);
}

export default Component;
