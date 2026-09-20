import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djo0k6nzu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="djo0k6nzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:play-small-solid"} {...others} />);
}

export default Component;
