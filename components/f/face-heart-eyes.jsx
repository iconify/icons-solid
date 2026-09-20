import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju4ghls-w.css';
import '../../css/a/aegljw1gn.css';
import '../../css/c/c5qc64bra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ju4ghls-w"/><path class="aegljw1gn"/><path class="c5qc64bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:face-heart-eyes"} {...others} />);
}

export default Component;
