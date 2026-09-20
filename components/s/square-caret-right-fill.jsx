import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvsq4cc8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lvsq4cc8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-caret-right-fill"} {...others} />);
}

export default Component;
