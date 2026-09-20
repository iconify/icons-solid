import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs7ip6b0k.css';
import '../../css/o/od1iqpboh.css';
import '../../css/k/k79q3xboj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs7ip6b0k"/><path class="od1iqpboh"/><circle class="k79q3xboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image"} {...others} />);
}

export default Component;
