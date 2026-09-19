import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_h_9xbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_h_9xbnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:puzzle-piece-filled"} {...others} />);
}

export default Component;
