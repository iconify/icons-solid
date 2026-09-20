import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxd-8e_9n.css';
import '../../css/t/tlplblg9a.css';
import '../../css/h/hse9jrbcs.css';
import '../../css/u/ucf26ob4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxd-8e_9n"/><path class="tlplblg9a"/><path clip-rule="evenodd" class="hse9jrbcs"/><path class="ucf26ob4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-alt"} {...others} />);
}

export default Component;
