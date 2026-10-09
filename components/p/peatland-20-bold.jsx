import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd0q8bb7j.css';
import '../../css/s/sczoe5bou.css';
import '../../css/o/oecuqacqp.css';
import '../../css/b/bbyntq65y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gd0q8bb7j"/><path class="sczoe5bou"/><path class="oecuqacqp"/><path class="bbyntq65y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:peatland-20-bold"} {...others} />);
}

export default Component;
