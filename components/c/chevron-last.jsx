import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt8pr1bds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jt8pr1bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chevron-last"} {...others} />);
}

export default Component;
