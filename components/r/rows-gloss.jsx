import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so-2c2wtc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="so-2c2wtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rows-gloss"} {...others} />);
}

export default Component;
