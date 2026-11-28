import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4uqq4buf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fd0uewd8f.css';
import '../../css/q/q940tbb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary z4uqq4buf"/><g class="dt0cm9dhy primary"><path class="fd0uewd8f"/><path class="q940tbb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:castle-duo"} {...others} />);
}

export default Component;
