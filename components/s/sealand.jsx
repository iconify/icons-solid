import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgbhcdb8z.css';
import '../../css/a/aetdrzb6l.css';
import '../../css/n/n-k5dxbht.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="tgbhcdb8z"/><path class="aetdrzb6l"/><path class="n-k5dxbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sealand"} {...others} />);
}

export default Component;
