import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5c9g5bsj.css';
import '../../css/z/zoxwfdcwf.css';
import '../../css/s/su0illb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5c9g5bsj"/><path class="zoxwfdcwf"/><path class="su0illb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:cloud-download"} {...others} />);
}

export default Component;
