import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv-0_9b5j.css';
import '../../css/t/t141ssbgj.css';
import '../../css/x/xgz4a685r.css';
import '../../css/u/umxz_5b4r.css';
import '../../css/k/kehzw2byj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vv-0_9b5j wm-shadow"/><path class="t141ssbgj wm-k"/><path class="wm-k xgz4a685r"/><path class="umxz_5b4r wm-a"/><path class="kehzw2byj wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevrons-up"} {...others} />);
}

export default Component;
