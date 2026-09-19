import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqlv_3b2t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bqlv_3b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:girl-angel"} {...others} />);
}

export default Component;
