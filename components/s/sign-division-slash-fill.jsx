import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n12cj6bru.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n12cj6bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-slash-fill"} {...others} />);
}

export default Component;
