import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx740u_sa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yx740u_sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:clothes-outline"} {...others} />);
}

export default Component;
