import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1g2qz_oe.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="p1g2qz_oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:watch-1-solid"} {...others} />);
}

export default Component;
