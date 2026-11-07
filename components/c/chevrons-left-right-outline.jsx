import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsygtybgy.css';
import '../../css/j/jwomz4bvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsygtybgy"/><path class="jwomz4bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-outline"} {...others} />);
}

export default Component;
