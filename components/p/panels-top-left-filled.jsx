import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v19eqwb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v19eqwb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panels-top-left-filled"} {...others} />);
}

export default Component;
