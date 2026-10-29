import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s4i2_ccew.css';
import '../../css/b/bs62-x9zy.css';
import '../../css/v/viuglgbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s4i2_ccew"/><path class="bs62-x9zy"/><path class="viuglgbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:book-open-check"} {...others} />);
}

export default Component;
