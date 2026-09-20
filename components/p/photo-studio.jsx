import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/ko4kphb8z.css';
import '../../css/z/z2i083byh.css';
import '../../css/a/a6wkvlbgd.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ko4kphb8z"/><path class="z2i083byh"/><path class="a6wkvlbgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:photo-studio"} {...others} />);
}

export default Component;
