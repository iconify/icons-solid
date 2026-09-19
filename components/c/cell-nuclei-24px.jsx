import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/afn5g7bzd.css';
import '../../css/m/md5aejbhd.css';
import '../../css/a/aylzo1b9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="afn5g7bzd"/><path clip-rule="evenodd" class="md5aejbhd"/><path clip-rule="evenodd" class="aylzo1b9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cell-nuclei-24px"} {...others} />);
}

export default Component;
