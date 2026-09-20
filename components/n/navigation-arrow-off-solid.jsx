import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_byzp5sk.css';
import '../../css/g/gj4pehvxo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j_byzp5sk"/><path clip-rule="evenodd" class="gj4pehvxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:navigation-arrow-off-solid"} {...others} />);
}

export default Component;
