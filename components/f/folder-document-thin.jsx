import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dnynulurz.css';
import '../../css/d/d3c1e1uyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dnynulurz"/><path class="d3c1e1uyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-document-thin"} {...others} />);
}

export default Component;
