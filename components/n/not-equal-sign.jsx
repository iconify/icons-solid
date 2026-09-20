import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm_t_cc9x.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zm_t_cc9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:not-equal-sign"} {...others} />);
}

export default Component;
