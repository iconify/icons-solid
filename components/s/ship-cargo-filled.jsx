import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d759uxleu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d759uxleu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ship-cargo-filled"} {...others} />);
}

export default Component;
