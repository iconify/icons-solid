import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-ns11z2a.css';
import '../../css/g/gwkfc5b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-ns11z2a"/><path class="gwkfc5b2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-favorite-01"} {...others} />);
}

export default Component;
