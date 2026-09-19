import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi2mgubtd.css';
import '../../css/f/fgk1ekbcn.css';
import '../../css/j/j0k3qqbww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wi2mgubtd"/><path class="fgk1ekbcn"/><path class="j0k3qqbww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:id-card"} {...others} />);
}

export default Component;
