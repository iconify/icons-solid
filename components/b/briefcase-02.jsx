import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/chthof-am.css';
import '../../css/s/sg0f65kkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="chthof-am"/><path class="sg0f65kkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-02"} {...others} />);
}

export default Component;
