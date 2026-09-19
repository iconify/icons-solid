import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgv83kgpw.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="tgv83kgpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:yenalt"} {...others} />);
}

export default Component;
