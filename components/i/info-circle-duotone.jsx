import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l57giywpk.css';
import '../../css/f/fue51nqfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l57giywpk"/><path class="fue51nqfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:info-circle-duotone"} {...others} />);
}

export default Component;
