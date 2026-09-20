import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glkmpbbmk.css';
import '../../css/m/m4wlqkz7z.css';
import '../../css/o/o2k6b7btj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glkmpbbmk"/><path class="m4wlqkz7z"/><path class="o2k6b7btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:book-bookmark"} {...others} />);
}

export default Component;
