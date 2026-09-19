import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt1yw8cpo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zt1yw8cpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:wing"} {...others} />);
}

export default Component;
