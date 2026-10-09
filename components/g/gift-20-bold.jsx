import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r56981bwx.css';
import '../../css/o/ol6cddb-q.css';
import '../../css/y/y954mibjs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r56981bwx"/><path class="ol6cddb-q"/><path class="y954mibjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gift-20-bold"} {...others} />);
}

export default Component;
