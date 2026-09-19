import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwooq4bpl.css';
import '../../css/z/zkjh13stl.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nwooq4bpl"/><path class="zkjh13stl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:eye-slash-16-solid"} {...others} />);
}

export default Component;
