import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abk1k7b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="abk1k7b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shapes-bold"} {...others} />);
}

export default Component;
