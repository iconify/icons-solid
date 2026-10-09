import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahg6c7ovd.css';
import '../../css/v/vv79wccfl.css';
import '../../css/o/oh57i-o3j.css';
import '../../css/c/c4ymzv_2t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ahg6c7ovd"/><path class="vv79wccfl"/><path class="oh57i-o3j"/><path class="c4ymzv_2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:languages-20"} {...others} />);
}

export default Component;
