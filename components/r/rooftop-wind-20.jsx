import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6julkbke.css';
import '../../css/t/t5m9mnbka.css';
import '../../css/x/x67cv140v.css';
import '../../css/x/xwei6nojw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t6julkbke"/><path class="t5m9mnbka"/><path class="x67cv140v"/><path class="xwei6nojw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rooftop-wind-20"} {...others} />);
}

export default Component;
