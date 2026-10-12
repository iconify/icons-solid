import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj2-olrwi.css';
import '../../css/z/z-s_bkbrl.css';
import '../../css/u/uus2tq10l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bj2-olrwi"/><path class="z-s_bkbrl"/><path class="uus2tq10l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-arrow-left-stroke-20"} {...others} />);
}

export default Component;
