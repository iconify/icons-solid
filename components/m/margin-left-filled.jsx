import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze3zlmbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ze3zlmbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:margin-left-filled"} {...others} />);
}

export default Component;
