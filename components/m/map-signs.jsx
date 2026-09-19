import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btfnhwxyn.css';

const viewBox = {"width":1728,"height":1792};
const content = `<path class="btfnhwxyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:map-signs"} {...others} />);
}

export default Component;
