import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/binil8b-i.css';
import '../../css/q/qv-bz92zv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="binil8b-i"/><path class="qv-bz92zv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:trending-up"} {...others} />);
}

export default Component;
