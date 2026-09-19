import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4zfxlbgj.css';
import '../../css/b/bh79t3b8l.css';
import '../../css/n/nnghyyb1l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a4zfxlbgj"/><path class="bh79t3b8l"/><path class="nnghyyb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:symlink"} {...others} />);
}

export default Component;
