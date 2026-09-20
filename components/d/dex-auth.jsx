import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqkec9sqi.css';
import '../../css/g/gun75xfbd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yqkec9sqi"/><circle class="gun75xfbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dex-auth"} {...others} />);
}

export default Component;
