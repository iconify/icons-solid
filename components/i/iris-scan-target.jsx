import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1ul3kb-l.css';
import '../../css/m/meqydp0-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c1ul3kb-l"/><path class="meqydp0-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:iris-scan-target"} {...others} />);
}

export default Component;
