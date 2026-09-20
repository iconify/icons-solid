import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/qn38fh7cv.css';
import '../../css/e/e-wbu4bmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="qn38fh7cv"/><path class="e-wbu4bmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:harddisk-4"} {...others} />);
}

export default Component;
