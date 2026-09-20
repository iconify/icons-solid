import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr33f7nqp.css';
import '../../css/a/afu1s7q2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr33f7nqp"/><path class="afu1s7q2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arweave"} {...others} />);
}

export default Component;
