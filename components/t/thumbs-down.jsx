import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/euxfh3bvf.css';
import '../../css/s/s-x4hri0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="euxfh3bvf"/><path class="s-x4hri0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:thumbs-down"} {...others} />);
}

export default Component;
