import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0c3qtbeq.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="c0c3qtbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bug-1"} {...others} />);
}

export default Component;
