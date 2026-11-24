import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynb_ho6fv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ynb_ho6fv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hot-air-balloon-filled"} {...others} />);
}

export default Component;
