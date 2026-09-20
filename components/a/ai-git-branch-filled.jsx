import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts2-oobwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts2-oobwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-git-branch-filled"} {...others} />);
}

export default Component;
