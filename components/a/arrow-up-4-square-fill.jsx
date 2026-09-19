import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzv55vozr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wzv55vozr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-up-4-square-fill"} {...others} />);
}

export default Component;
