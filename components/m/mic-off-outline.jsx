import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpl7y8bqq.css';
import '../../css/k/kebsqacsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpl7y8bqq"/><path class="kebsqacsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:mic-off-outline"} {...others} />);
}

export default Component;
