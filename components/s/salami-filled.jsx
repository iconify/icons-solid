import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5b9_rbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x5b9_rbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:salami-filled"} {...others} />);
}

export default Component;
