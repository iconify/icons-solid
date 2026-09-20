import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/suj7micvh.css';
import '../../css/s/sz9-6wq4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="suj7micvh"/><path class="sz9-6wq4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-down-left"} {...others} />);
}

export default Component;
