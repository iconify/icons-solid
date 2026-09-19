import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngo9cq6cp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ngo9cq6cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:marketo"} {...others} />);
}

export default Component;
