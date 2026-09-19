import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glg9711yw.css';
import '../../css/g/go1ki5bko.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="glg9711yw"/><path class="go1ki5bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:crop"} {...others} />);
}

export default Component;
