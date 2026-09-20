import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxnfvbayz.css';
import '../../css/h/h46e1ybha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxnfvbayz"/><path class="h46e1ybha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:watch-beat-1"} {...others} />);
}

export default Component;
