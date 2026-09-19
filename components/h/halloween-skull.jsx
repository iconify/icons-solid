import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xys7sp8ux.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xys7sp8ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:halloween-skull"} {...others} />);
}

export default Component;
