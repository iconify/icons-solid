import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg1ngf2io.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jg1ngf2io"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pen-alt-filled"} {...others} />);
}

export default Component;
