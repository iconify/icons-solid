import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a81mfig0j.css';
import '../../css/s/ssrw9lb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a81mfig0j"/><path clip-rule="evenodd" class="ssrw9lb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:trash-outline"} {...others} />);
}

export default Component;
