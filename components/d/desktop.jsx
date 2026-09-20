import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnq2wwbiq.css';
import '../../css/e/exhairhvm.css';
import '../../css/i/iz_-1hojn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bnq2wwbiq"/><path class="exhairhvm"/><path class="iz_-1hojn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:desktop"} {...others} />);
}

export default Component;
