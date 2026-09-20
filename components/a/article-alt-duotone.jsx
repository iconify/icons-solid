import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfyooabog.css';
import '../../css/g/gxd-8e_9n.css';
import '../../css/m/mjkpimbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfyooabog"/><path class="gxd-8e_9n"/><path class="mjkpimbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-alt-duotone"} {...others} />);
}

export default Component;
