import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4wd_7bju.css';
import '../../css/w/wnjg76bsw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b4wd_7bju"/><path class="wnjg76bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:portainer-pink"} {...others} />);
}

export default Component;
