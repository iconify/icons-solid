import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2u8nabzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d2u8nabzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:search-history-browser-remix"} {...others} />);
}

export default Component;
