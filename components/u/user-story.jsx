import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gacv9ebgf.css';
import '../../css/o/o9_d-n63m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gacv9ebgf"/><path class="o9_d-n63m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-story"} {...others} />);
}

export default Component;
