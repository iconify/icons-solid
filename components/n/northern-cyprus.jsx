import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/f/fn6nz5b1f.css';
import '../../css/i/i5k9fornz.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="fn6nz5b1f"/><path class="i5k9fornz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:northern-cyprus"} {...others} />);
}

export default Component;
