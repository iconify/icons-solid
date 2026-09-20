import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf5t8vb8e.css';
import '../../css/o/ofn7d5bff.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pf5t8vb8e"/><path class="ofn7d5bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-storage"} {...others} />);
}

export default Component;
