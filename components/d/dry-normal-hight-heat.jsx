import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb-3hdh2i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb-3hdh2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:dry-normal-hight-heat"} {...others} />);
}

export default Component;
