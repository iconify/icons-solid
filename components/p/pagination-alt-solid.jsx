import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4kggwbad.css';
import '../../css/u/uek9cd0sz.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="n4kggwbad"/><path clip-rule="evenodd" class="uek9cd0sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pagination-alt-solid"} {...others} />);
}

export default Component;
