import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4zoy01sj.css';
import '../../css/w/whgmfl94s.css';
import '../../css/d/d01_w0vgw.css';
import '../../css/d/dhxolmyqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4zoy01sj"/><path class="whgmfl94s"/><path class="d01_w0vgw"/><path class="dhxolmyqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sdl"} {...others} />);
}

export default Component;
