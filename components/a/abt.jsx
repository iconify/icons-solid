import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq06-391u.css';
import '../../css/r/rte4cibeo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yq06-391u"/><path class="rte4cibeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:abt"} {...others} />);
}

export default Component;
