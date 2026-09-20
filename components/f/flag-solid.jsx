import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwu5y9wqa.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gwu5y9wqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:flag-solid"} {...others} />);
}

export default Component;
