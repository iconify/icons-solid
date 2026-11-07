import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffu3be33e.css';
import '../../css/e/e91nqrblz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ffu3be33e"/><path clip-rule="evenodd" class="e91nqrblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-outline"} {...others} />);
}

export default Component;
