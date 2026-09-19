import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqhbbhbtp.css';

const viewBox = {"width":998.296,"height":1000};
const content = `<path class="eqhbbhbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:deviantart"} {...others} />);
}

export default Component;
