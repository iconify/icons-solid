import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/soyattb1j.css';
import '../../css/s/spyvq8bcz.css';
import '../../css/f/fx7oynozm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="soyattb1j"/><path class="spyvq8bcz"/><path class="fx7oynozm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:insert-side"} {...others} />);
}

export default Component;
