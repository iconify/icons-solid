import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny3teufhg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ny3teufhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:file-bookmark-solid"} {...others} />);
}

export default Component;
