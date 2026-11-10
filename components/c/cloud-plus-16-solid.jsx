import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huzhlqb_z.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="huzhlqb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:cloud-plus-16-solid"} {...others} />);
}

export default Component;
