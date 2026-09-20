import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3zl63b3y.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="u3zl63b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:text-alginment-left"} {...others} />);
}

export default Component;
