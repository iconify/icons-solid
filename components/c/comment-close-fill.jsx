import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9b-hkiwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n9b-hkiwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-close-fill"} {...others} />);
}

export default Component;
