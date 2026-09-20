import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1o8mdb_p.css';
import '../../css/t/twm3r6b7t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l1o8mdb_p"/><path clip-rule="evenodd" class="twm3r6b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pin-solid"} {...others} />);
}

export default Component;
