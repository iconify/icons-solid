import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z69_crzqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z69_crzqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:house-plus-gloss"} {...others} />);
}

export default Component;
