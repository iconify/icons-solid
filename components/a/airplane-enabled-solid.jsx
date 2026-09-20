import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul4olbb8p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ul4olbb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:airplane-enabled-solid"} {...others} />);
}

export default Component;
