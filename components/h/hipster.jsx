import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z06qeb-_f.css';
import '../../css/e/eiabxs9ve.css';
import '../../css/j/jel9531ah.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z06qeb-_f"/><path class="eiabxs9ve"/><path class="jel9531ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:hipster"} {...others} />);
}

export default Component;
