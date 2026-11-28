import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr3kfjbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wr3kfjbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:washing-machine"} {...others} />);
}

export default Component;
