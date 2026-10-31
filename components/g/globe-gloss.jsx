import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcxv7rblj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bcxv7rblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-gloss"} {...others} />);
}

export default Component;
