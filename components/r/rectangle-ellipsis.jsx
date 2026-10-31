import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gz47tp26q.css';
import '../../css/e/e31w36bfn.css';
import '../../css/q/q98kknj2b.css';
import '../../css/z/zfvqimbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gz47tp26q wm-shadow"/><path class="e31w36bfn wm-shadow"/><path class="q98kknj2b"/><path class="zfvqimbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rectangle-ellipsis"} {...others} />);
}

export default Component;
