import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x40zo2lkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x40zo2lkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:pinterest-outline"} {...others} />);
}

export default Component;
