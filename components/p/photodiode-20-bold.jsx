import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo80ubkp.css';
import '../../css/j/jx6xceb7r.css';
import '../../css/b/b_flqm05r.css';
import '../../css/h/ho9tv7fwi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sfo80ubkp"/><path class="jx6xceb7r"/><path class="b_flqm05r"/><path class="ho9tv7fwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:photodiode-20-bold"} {...others} />);
}

export default Component;
