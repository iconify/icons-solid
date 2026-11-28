import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqs6jwblf.css';
import '../../css/i/i2jdkabow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqs6jwblf secondary"/><path class="i2jdkabow primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vase-duo"} {...others} />);
}

export default Component;
