import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knp2qb6bk.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="knp2qb6bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:get-pocket"} {...others} />);
}

export default Component;
