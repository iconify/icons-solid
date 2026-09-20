import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/imaf3zb1o.css';
import '../../css/o/ohg80ks9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="imaf3zb1o"/><path class="ohg80ks9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:delivery-truck"} {...others} />);
}

export default Component;
