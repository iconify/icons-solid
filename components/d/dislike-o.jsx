import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsdbqmlex.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rsdbqmlex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:dislike-o"} {...others} />);
}

export default Component;
