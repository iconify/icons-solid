import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnl2_bcrh.css';
import '../../css/f/flf8qs4fv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnl2_bcrh"/><path class="flf8qs4fv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:twtich"} {...others} />);
}

export default Component;
