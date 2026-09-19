import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_6hrubaw.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="n_6hrubaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:overweight2x-outline"} {...others} />);
}

export default Component;
