import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cahlgsbxb.css';
import '../../css/f/f32tc6mne.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cahlgsbxb"/><path class="f32tc6mne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:windmill"} {...others} />);
}

export default Component;
