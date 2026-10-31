import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufvrkebxw.css';
import '../../css/o/owp3yfbrj.css';
import '../../css/v/v4iawlr0q.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ufvrkebxw"/><path class="owp3yfbrj"/><path class="v4iawlr0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:armenia"} {...others} />);
}

export default Component;
