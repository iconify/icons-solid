import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uww47e16f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uww47e16f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:send-alt-02-filled"} {...others} />);
}

export default Component;
