import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d5wgp4bfy.css';
import '../../css/g/gu5hqxbkc.css';
import '../../css/l/lrfx45bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d5wgp4bfy"/><path class="gu5hqxbkc"/><path class="lrfx45bzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:paginate-filter-music"} {...others} />);
}

export default Component;
