import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4fpjkz2f.css';
import '../../css/j/jq6ai4chg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b4fpjkz2f"/><path class="jq6ai4chg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:phone-miss-solid"} {...others} />);
}

export default Component;
