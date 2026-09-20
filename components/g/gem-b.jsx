import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7cszpblb.css';
import '../../css/l/lkao81bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o7cszpblb"/><path class="lkao81bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:gem-b"} {...others} />);
}

export default Component;
