import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onhfuzbtz.css';
import '../../css/j/jebv5b9nd.css';
import '../../css/q/qhmpud_oy.css';
import '../../css/k/k49tplz7p.css';
import '../../css/n/n1tyv62lo.css';
import '../../css/z/zksfegh-a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="onhfuzbtz"/><path class="jebv5b9nd"/><path class="qhmpud_oy"/><path class="k49tplz7p"/><path class="n1tyv62lo"/><path class="zksfegh-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pantograph-charger-48-bold"} {...others} />);
}

export default Component;
