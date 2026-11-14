import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v51nizb4t.css';
import '../../css/b/bn-3rrb-d.css';
import '../../css/b/br3q48bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v51nizb4t"/><path class="bn-3rrb-d"/><path class="br3q48bdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-preview-02"} {...others} />);
}

export default Component;
