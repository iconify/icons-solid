import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp40cv00c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pp40cv00c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:user-circle-gear"} {...others} />);
}

export default Component;
