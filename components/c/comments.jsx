import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gr941wbsm.css';
import '../../css/s/s1axx0b3q.css';
import '../../css/p/p6dgoyb0g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGs7ZyCbSe"><g class="hv130ab-t"><path class="gr941wbsm"/><path class="s1axx0b3q"/><path class="p6dgoyb0g"/></g></mask></defs><path mask="url(#SVGs7ZyCbSe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:comments"} {...others} />);
}

export default Component;
