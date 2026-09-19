import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u09ol3bkv.css';

const viewBox = {"width":42,"height":42};
const content = `<path class="u09ol3bkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"topcoat:question"} {...others} />);
}

export default Component;
