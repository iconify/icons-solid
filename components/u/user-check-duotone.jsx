import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow15xdb1e.css';
import '../../css/e/eeg6scbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow15xdb1e"/><path class="eeg6scbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-check-duotone"} {...others} />);
}

export default Component;
