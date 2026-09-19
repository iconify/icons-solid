import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/purru6rav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="purru6rav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:border-style-dashed"} {...others} />);
}

export default Component;
