import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufxbcneuu.css';
import '../../css/s/s1ghx-bwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufxbcneuu"/><path class="s1ghx-bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layer-arrow-up-filled"} {...others} />);
}

export default Component;
