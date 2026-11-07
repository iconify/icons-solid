import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1bfxqbht.css';
import '../../css/e/e7qclfbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1bfxqbht"/><path class="e7qclfbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-left-bold-duotone"} {...others} />);
}

export default Component;
