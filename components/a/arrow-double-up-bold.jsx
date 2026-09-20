import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehf9i8bjq.css';
import '../../css/k/k5x1h1nos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehf9i8bjq"/><path class="k5x1h1nos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-double-up-bold"} {...others} />);
}

export default Component;
