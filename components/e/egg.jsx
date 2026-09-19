import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rniplklmo.css';
import '../../css/a/a9vmhrz8t.css';
import '../../css/k/kntuwjb7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="rniplklmo"/><path class="a9vmhrz8t"/><path class="kntuwjb7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:egg"} {...others} />);
}

export default Component;
