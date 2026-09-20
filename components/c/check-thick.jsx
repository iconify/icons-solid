import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci7s_f6sz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ci7s_f6sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:check-thick"} {...others} />);
}

export default Component;
