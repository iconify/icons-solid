import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y379_3lgr.css';
import '../../css/o/o774rzb4z.css';
import '../../css/x/xd1z83qkw.css';
import '../../css/v/vygt9fbkg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y379_3lgr"/><path class="o774rzb4z"/><path class="xd1z83qkw"/><path class="vygt9fbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:socialhome"} {...others} />);
}

export default Component;
