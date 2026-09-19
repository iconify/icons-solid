import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5vn515oq.css';
import '../../css/i/iohxa7xbn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="b5vn515oq"/><path clip-rule="evenodd" class="iohxa7xbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-huawei-appgallery"} {...others} />);
}

export default Component;
