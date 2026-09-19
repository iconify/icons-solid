import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr7d6n9od.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xr7d6n9od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:caret-up-solid"} {...others} />);
}

export default Component;
