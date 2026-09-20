import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqw920b4e.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="eqw920b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:border-none-solid"} {...others} />);
}

export default Component;
