import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsrxd0bsy.css';
import '../../css/d/d7pg5sbdd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fsrxd0bsy"/><path class="d7pg5sbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:match-whole-word-16"} {...others} />);
}

export default Component;
