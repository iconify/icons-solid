import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0b7glbxa.css';
import '../../css/z/zyv9ekbcg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b0b7glbxa"/><path class="zyv9ekbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:android-fill-16"} {...others} />);
}

export default Component;
