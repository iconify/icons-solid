import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy178tbuh.css';
import '../../css/s/skftdzbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jy178tbuh"/><path class="skftdzbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-minimalistic-horizontal-bold-duotone"} {...others} />);
}

export default Component;
