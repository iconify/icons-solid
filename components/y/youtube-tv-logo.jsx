import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/n/n3ylcwb-q.css';
import '../../css/a/aawotj6mg.css';
import '../../css/z/zl74uacec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="n3ylcwb-q"/><path class="aawotj6mg"/><path class="zl74uacec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:youtube-tv-logo"} {...others} />);
}

export default Component;
