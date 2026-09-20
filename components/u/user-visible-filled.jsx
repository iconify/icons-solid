import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bey0n9euq.css';
import '../../css/b/bh5yu-cer.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bey0n9euq"/><path class="bh5yu-cer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-visible-filled"} {...others} />);
}

export default Component;
