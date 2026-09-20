import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wll0o73_j.css';
import '../../css/f/fyli-sb6x.css';
import '../../css/o/ou4l43ypu.css';
import '../../css/d/d6kq8c5bj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wll0o73_j"/><path class="fyli-sb6x"/><path class="ou4l43ypu"/><path class="d6kq8c5bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dribdat"} {...others} />);
}

export default Component;
