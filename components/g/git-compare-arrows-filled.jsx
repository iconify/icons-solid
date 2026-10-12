import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqx4n9nhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqx4n9nhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-compare-arrows-filled"} {...others} />);
}

export default Component;
