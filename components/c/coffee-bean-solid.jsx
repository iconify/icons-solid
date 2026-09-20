import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3r63-bok.css';
import '../../css/x/x53871j6y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k3r63-bok"/><path class="x53871j6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:coffee-bean-solid"} {...others} />);
}

export default Component;
