import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzu5dbbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzu5dbbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:12-plus"} {...others} />);
}

export default Component;
