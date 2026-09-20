import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea4t3sg4a.css';
import '../../css/t/t-4jncuxe.css';
import '../../css/y/y9gfqabgl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ea4t3sg4a"/><path class="t-4jncuxe"/><path class="y9gfqabgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:orientation"} {...others} />);
}

export default Component;
