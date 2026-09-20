import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvbqqjbjd.css';
import '../../css/g/ghq-bmqvm.css';
import '../../css/j/jsej37bqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rvbqqjbjd"/><path class="ghq-bmqvm"/><path class="jsej37bqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:edit-1"} {...others} />);
}

export default Component;
