import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bez3wqbvf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bez3wqbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:circle-succeed-outline"} {...others} />);
}

export default Component;
