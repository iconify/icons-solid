import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/acua8t__b.css';
import '../../css/s/s1gb9bb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="acua8t__b"/><path class="s1gb9bb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-outgoing-02"} {...others} />);
}

export default Component;
