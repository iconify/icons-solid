import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2nr3_bdv.css';
import '../../css/t/tkgm1jb2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2nr3_bdv"/><path clip-rule="evenodd" class="tkgm1jb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-copy-filled"} {...others} />);
}

export default Component;
