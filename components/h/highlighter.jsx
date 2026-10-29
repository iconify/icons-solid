import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r141g95mt.css';
import '../../css/w/wl6kj8h9x.css';
import '../../css/r/r2f7wf--x.css';
import '../../css/c/c4b1g3bsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r141g95mt wm-a"/><path class="wl6kj8h9x wm-k"/><path class="r2f7wf--x wm-k"/><path class="c4b1g3bsn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:highlighter"} {...others} />);
}

export default Component;
