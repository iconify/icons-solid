import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh4-yy1bi.css';
import '../../css/j/jnfyn9bda.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fh4-yy1bi"/><path class="jnfyn9bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mop-sparkles-filled"} {...others} />);
}

export default Component;
