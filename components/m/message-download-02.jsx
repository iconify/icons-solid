import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ran-smzkp.css';
import '../../css/p/p8eun3bzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ran-smzkp"/><path class="p8eun3bzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-download-02"} {...others} />);
}

export default Component;
