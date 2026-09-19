import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-9fldx0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a-9fldx0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-trending-up-solid"} {...others} />);
}

export default Component;
