import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0vgceb-l.css';
import '../../css/c/cnllsbb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x0vgceb-l"/><path class="cnllsbb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:file-solid"} {...others} />);
}

export default Component;
