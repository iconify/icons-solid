import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a599-h6nt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a599-h6nt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:open-umbrella-solid"} {...others} />);
}

export default Component;
