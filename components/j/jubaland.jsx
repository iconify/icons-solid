import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvdemeinh.css';
import '../../css/z/zu4nqpm5c.css';
import '../../css/m/mfzwz5b6g.css';
import '../../css/v/v24hg-b_g.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="vvdemeinh"/><path class="zu4nqpm5c"/><path class="mfzwz5b6g"/><path class="v24hg-b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:jubaland"} {...others} />);
}

export default Component;
