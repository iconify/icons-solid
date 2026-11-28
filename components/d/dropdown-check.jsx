import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eng1o0dzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eng1o0dzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:dropdown-check"} {...others} />);
}

export default Component;
