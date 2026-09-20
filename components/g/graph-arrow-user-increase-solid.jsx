import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kotf-_org.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="kotf-_org"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graph-arrow-user-increase-solid"} {...others} />);
}

export default Component;
