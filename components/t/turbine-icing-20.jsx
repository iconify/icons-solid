import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss9ptiz3a.css';
import '../../css/z/zgksttbub.css';
import '../../css/y/yjufhcc8t.css';
import '../../css/u/uj36_n52s.css';
import '../../css/g/gp7-kkbns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ss9ptiz3a"/><path class="zgksttbub"/><path class="yjufhcc8t"/><path class="uj36_n52s"/><path class="gp7-kkbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turbine-icing-20"} {...others} />);
}

export default Component;
