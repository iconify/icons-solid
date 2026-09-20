import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6f5mz37c.css';
import '../../css/p/p0ds3lbox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k6f5mz37c"/><path class="p0ds3lbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:volume-control-remove-1-bold"} {...others} />);
}

export default Component;
