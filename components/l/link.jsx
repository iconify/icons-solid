import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihxc3qbho.css';
import '../../css/s/snad-_3mu.css';
import '../../css/h/hgd2feb9j.css';
import '../../css/u/ubh-td2mx.css';
import '../../css/e/e5bk9ac8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihxc3qbho wm-shadow"/><path class="snad-_3mu wm-k"/><path class="hgd2feb9j wm-k"/><path class="ubh-td2mx wm-a"/><path class="e5bk9ac8t wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:link"} {...others} />);
}

export default Component;
