import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uot15gzqk.css';
import '../../css/n/nf2tmmxki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uot15gzqk"/><path class="nf2tmmxki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dropdown"} {...others} />);
}

export default Component;
