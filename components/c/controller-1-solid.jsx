import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl70dwxfs.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="nl70dwxfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:controller-1-solid"} {...others} />);
}

export default Component;
