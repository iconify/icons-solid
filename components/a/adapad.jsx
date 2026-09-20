import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upa1hq44h.css';
import '../../css/q/qmqyfo5li.css';
import '../../css/x/x_6hhwb6i.css';
import '../../css/c/c567p_bvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="upa1hq44h"/><path class="qmqyfo5li"/><path class="x_6hhwb6i"/><path class="c567p_bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:adapad"} {...others} />);
}

export default Component;
