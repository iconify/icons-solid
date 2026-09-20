import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdaijo30p.css';
import '../../css/j/jevxj9zcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdaijo30p"/><path class="jevxj9zcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:lock-access"} {...others} />);
}

export default Component;
