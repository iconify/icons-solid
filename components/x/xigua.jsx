import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq1lkzb4i.css';
import '../../css/y/y6u5j1bze.css';
import '../../css/f/f4q9vp1ai.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG13UMoesz"><g class="pq1lkzb4i"><path class="y6u5j1bze"/><path class="f4q9vp1ai"/></g></mask></defs><path mask="url(#SVG13UMoesz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:xigua"} {...others} />);
}

export default Component;
