import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekj4x2bnk.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ekj4x2bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:rss-symbol-remix"} {...others} />);
}

export default Component;
