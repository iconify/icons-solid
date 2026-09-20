import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aey68mb3i.css';
import '../../css/y/ynooprbfx.css';
import '../../css/y/yc1hb9b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aey68mb3i"/><path class="ynooprbfx"/><path clip-rule="evenodd" class="yc1hb9b0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:calendar-nine"} {...others} />);
}

export default Component;
