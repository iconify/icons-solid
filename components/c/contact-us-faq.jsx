import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/so7ut0p3d.css';
import '../../css/j/j09j7cc8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="so7ut0p3d"/><path class="j09j7cc8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:contact-us-faq"} {...others} />);
}

export default Component;
