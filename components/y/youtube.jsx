import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgpquq.css';
import '../../css/b/bxtoun.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d--8d_6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kgpquq"/><path class="bxtoun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:youtube"} {...others} />);
}

export default Component;
