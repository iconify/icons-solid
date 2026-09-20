import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avagvcb4q.css';
import '../../css/y/ydk2xxbih.css';
import '../../css/j/j1it0mrui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="avagvcb4q"/><path clip-rule="evenodd" class="ydk2xxbih"/><path class="j1it0mrui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:troy"} {...others} />);
}

export default Component;
