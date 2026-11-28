import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmw3_6bzd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmw3_6bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:recycle-check"} {...others} />);
}

export default Component;
