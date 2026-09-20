import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7hi0ksbs.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="l7hi0ksbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:align-text-left"} {...others} />);
}

export default Component;
