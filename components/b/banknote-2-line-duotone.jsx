import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lumh67bhe.css';
import '../../css/d/dhr1m1b7l.css';
import '../../css/c/c5vk6tgit.css';
import '../../css/k/kqoyfub9q.css';
import '../../css/r/r4_w910su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lumh67bhe"/><path class="dhr1m1b7l"/><path class="c5vk6tgit"/><path class="kqoyfub9q"/><path class="r4_w910su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-2-line-duotone"} {...others} />);
}

export default Component;
