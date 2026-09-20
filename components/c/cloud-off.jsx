import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us8ih0gnw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="us8ih0gnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cloud-off"} {...others} />);
}

export default Component;
