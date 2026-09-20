import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k938yxbhi.css';
import '../../css/b/b7jj8e8yz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k938yxbhi"/><path class="b7jj8e8yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-dots-round-check"} {...others} />);
}

export default Component;
