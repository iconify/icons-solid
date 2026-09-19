import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ey702vl0h.css';
import '../../css/y/ytxhlh7hz.css';
import '../../css/a/a03af4lru.css';
import '../../css/f/fhndzackx.css';
import '../../css/g/g1qifztlu.css';
import '../../css/r/rb4zlobtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ey702vl0h"/><circle class="ytxhlh7hz"/><path class="a03af4lru"/><circle class="fhndzackx"/><circle class="g1qifztlu"/><path class="rb4zlobtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:category-duotone"} {...others} />);
}

export default Component;
