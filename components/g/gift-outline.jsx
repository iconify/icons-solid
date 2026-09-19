import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7kqt_bhm.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="n7kqt_bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-outline"} {...others} />);
}

export default Component;
