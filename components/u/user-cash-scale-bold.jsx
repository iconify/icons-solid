import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi7_4fbxw.css';
import '../../css/v/v4344lbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi7_4fbxw"/><path class="v4344lbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:user-cash-scale-bold"} {...others} />);
}

export default Component;
