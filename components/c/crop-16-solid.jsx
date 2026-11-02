import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk2r7gbqk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sk2r7gbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:crop-16-solid"} {...others} />);
}

export default Component;
