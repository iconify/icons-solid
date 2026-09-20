import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqf_9i70w.css';
import '../../css/c/cvd8a-02h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="wqf_9i70w"/><path class="cvd8a-02h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:gamepad"} {...others} />);
}

export default Component;
