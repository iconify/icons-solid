import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax2g1qbyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ax2g1qbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:any-solvent"} {...others} />);
}

export default Component;
