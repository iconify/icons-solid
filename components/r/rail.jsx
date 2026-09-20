import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c466a129i.css';
import '../../css/z/zysww9lsz.css';
import '../../css/u/um8cl-nkw.css';
import '../../css/n/nzkrizz9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c466a129i"/><path class="zysww9lsz"/><path class="um8cl-nkw"/><path clip-rule="evenodd" class="nzkrizz9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rail"} {...others} />);
}

export default Component;
