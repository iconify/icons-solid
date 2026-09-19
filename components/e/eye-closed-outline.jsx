import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/affnekbuy.css';
import '../../css/w/wd3gak68y.css';
import '../../css/x/xu1bf4b6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="affnekbuy"/><path class="wd3gak68y"/><path class="xu1bf4b6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:eye-closed-outline"} {...others} />);
}

export default Component;
