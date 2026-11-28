import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr_znibnd.css';
import '../../css/z/zrh1fac9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yr_znibnd"/><path class="primary zrh1fac9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rewind-duo"} {...others} />);
}

export default Component;
