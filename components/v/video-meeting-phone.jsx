import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hmq1l2vbu.css';
import '../../css/g/g3e1yzbjo.css';
import '../../css/b/bnh6vyb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="hmq1l2vbu"/><path class="g3e1yzbjo"/><path class="bnh6vyb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:video-meeting-phone"} {...others} />);
}

export default Component;
