import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lga8dlbkm.css';
import '../../css/x/x9stnobdg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lga8dlbkm"/><path class="x9stnobdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wintry-mix"} {...others} />);
}

export default Component;
