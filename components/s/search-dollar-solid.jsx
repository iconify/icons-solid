import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6h3y_p6i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d6h3y_p6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:search-dollar-solid"} {...others} />);
}

export default Component;
