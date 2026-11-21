import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii30vacbk.css';
import '../../css/f/fdr6bubwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ii30vacbk"/><path class="fdr6bubwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:external-link-filled"} {...others} />);
}

export default Component;
