import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t3ot4iiwb.css';
import '../../css/c/cl9inu1st.css';
import '../../css/s/suved0bxg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="t3ot4iiwb"/><path clip-rule="evenodd" class="cl9inu1st"/><path class="suved0bxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pic"} {...others} />);
}

export default Component;
