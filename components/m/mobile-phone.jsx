import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a81a70bqz.css';
import '../../css/u/u9q9a8bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a81a70bqz"/><path class="u9q9a8bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:mobile-phone"} {...others} />);
}

export default Component;
