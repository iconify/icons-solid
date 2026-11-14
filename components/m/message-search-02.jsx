import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/he_cf3pbt.css';
import '../../css/b/b726t9wba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="he_cf3pbt"/><path class="b726t9wba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-search-02"} {...others} />);
}

export default Component;
