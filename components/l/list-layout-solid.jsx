import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbx6y9vvp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gbx6y9vvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:list-layout-solid"} {...others} />);
}

export default Component;
