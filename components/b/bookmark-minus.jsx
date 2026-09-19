import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9jq5ybcb.css';
import '../../css/b/bxmkebcbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9jq5ybcb"/><path class="bxmkebcbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bookmark-minus"} {...others} />);
}

export default Component;
