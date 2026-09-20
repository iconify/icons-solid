import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffuzoi-br.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<path class="ffuzoi-br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:moon-f"} {...others} />);
}

export default Component;
