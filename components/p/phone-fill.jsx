import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0j186b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c0j186b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:phone-fill"} {...others} />);
}

export default Component;
