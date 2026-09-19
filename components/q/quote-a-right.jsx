import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu2zzwf5c.css';

const viewBox = {"width":31,"height":24};
const content = `<path class="xu2zzwf5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:quote-a-right"} {...others} />);
}

export default Component;
