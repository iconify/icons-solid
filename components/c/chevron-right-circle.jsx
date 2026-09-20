import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z8s-3kbzd.css';
import '../../css/s/seygw-57p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z8s-3kbzd"/><path class="seygw-57p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chevron-right-circle"} {...others} />);
}

export default Component;
