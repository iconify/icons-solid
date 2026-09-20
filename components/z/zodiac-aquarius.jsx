import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj_v8nkfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj_v8nkfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zodiac-aquarius"} {...others} />);
}

export default Component;
