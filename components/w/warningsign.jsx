import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7xrwrv1i.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="k7xrwrv1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:warningsign"} {...others} />);
}

export default Component;
