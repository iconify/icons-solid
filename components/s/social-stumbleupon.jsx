import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5_uczi6x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o5_uczi6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:social-stumbleupon"} {...others} />);
}

export default Component;
