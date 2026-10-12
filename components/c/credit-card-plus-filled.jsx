import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoxpwbb0y.css';
import '../../css/b/b1-hh0bot.css';
import '../../css/s/s2otf6w0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zoxpwbb0y"/><path clip-rule="evenodd" class="b1-hh0bot"/><path class="s2otf6w0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:credit-card-plus-filled"} {...others} />);
}

export default Component;
