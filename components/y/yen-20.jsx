import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9k00b_1r.css';
import '../../css/w/wr4tv666r.css';
import '../../css/f/faz73x6ks.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u9k00b_1r"/><path class="wr4tv666r"/><path class="faz73x6ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yen-20"} {...others} />);
}

export default Component;
