import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck3c2j_ot.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ck3c2j_ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:coffee-mug-solid"} {...others} />);
}

export default Component;
