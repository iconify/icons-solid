import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0zrdacze.css';
import '../../css/y/ytt2rub5i.css';
import '../../css/x/x0ucnnbbj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d0zrdacze"/><path class="ytt2rub5i"/><path class="x0ucnnbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kmeet-light"} {...others} />);
}

export default Component;
