import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8p7wtb5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r8p7wtb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-down-5-circle-fill"} {...others} />);
}

export default Component;
