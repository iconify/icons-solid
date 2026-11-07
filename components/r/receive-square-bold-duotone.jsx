import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/g/g21do5pdv.css';
import '../../css/x/xx4egsacr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="g21do5pdv"/><path class="xx4egsacr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:receive-square-bold-duotone"} {...others} />);
}

export default Component;
