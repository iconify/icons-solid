import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p99d2z6jh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="p99d2z6jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-remove-2"} {...others} />);
}

export default Component;
