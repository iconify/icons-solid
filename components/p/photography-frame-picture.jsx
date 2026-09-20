import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a814z2b1q.css';
import '../../css/t/tu450gbwv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a814z2b1q"/><path class="tu450gbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:photography-frame-picture"} {...others} />);
}

export default Component;
