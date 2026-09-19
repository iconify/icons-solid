import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtx8_905u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wtx8_905u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:shopping-sale"} {...others} />);
}

export default Component;
