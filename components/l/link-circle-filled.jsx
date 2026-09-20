import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqii8ob8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kqii8ob8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link-circle-filled"} {...others} />);
}

export default Component;
