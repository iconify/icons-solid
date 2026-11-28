import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxyl4jfil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxyl4jfil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:folder-arrow-down"} {...others} />);
}

export default Component;
