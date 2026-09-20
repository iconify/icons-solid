import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqor_-z0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tqor_-z0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:rss-symbol-remix"} {...others} />);
}

export default Component;
