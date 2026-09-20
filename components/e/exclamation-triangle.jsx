import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0s77uk3v.css';
import '../../css/o/oclompb7u.css';
import '../../css/y/y-ttjwi6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0s77uk3v"/><circle class="oclompb7u"/><path class="y-ttjwi6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:exclamation-triangle"} {...others} />);
}

export default Component;
