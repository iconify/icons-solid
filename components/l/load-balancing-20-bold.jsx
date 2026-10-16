import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb0q-t_1r.css';
import '../../css/g/g8k86tb-n.css';
import '../../css/k/k-qil1rqy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gb0q-t_1r"/><path class="g8k86tb-n"/><path class="k-qil1rqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-balancing-20-bold"} {...others} />);
}

export default Component;
