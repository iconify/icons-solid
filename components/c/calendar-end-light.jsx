import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odnhlrb0v.css';
import '../../css/y/ynooprbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="odnhlrb0v"/><path class="ynooprbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:calendar-end-light"} {...others} />);
}

export default Component;
