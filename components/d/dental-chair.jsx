import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yf1-o6bau.css';
import '../../css/o/om6jlvbgh.css';
import '../../css/t/to8n_3bic.css';
import '../../css/b/bh4qffbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k yf1-o6bau"/><path class="om6jlvbgh wm-a"/><path class="to8n_3bic"/><path class="bh4qffbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dental-chair"} {...others} />);
}

export default Component;
