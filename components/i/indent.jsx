import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g87mvbbzo.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-7};
const content = `<path class="g87mvbbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:indent"} {...others} />);
}

export default Component;
