import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0z2qwb2g.css';
import '../../css/j/jo51jhayd.css';
import '../../css/y/y95al1bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0z2qwb2g"/><path clip-rule="evenodd" class="jo51jhayd"/><path clip-rule="evenodd" class="y95al1bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vvs"} {...others} />);
}

export default Component;
