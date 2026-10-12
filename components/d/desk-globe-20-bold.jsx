import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkilj4bin.css';
import '../../css/o/ogeeueq3y.css';
import '../../css/b/b-_qbabcf.css';
import '../../css/u/ud0albwsv.css';
import '../../css/h/hvs7j0bzj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dkilj4bin"/><path class="ogeeueq3y"/><path class="b-_qbabcf"/><path class="ud0albwsv"/><path class="hvs7j0bzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-globe-20-bold"} {...others} />);
}

export default Component;
