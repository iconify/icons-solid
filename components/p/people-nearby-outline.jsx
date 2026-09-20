import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1v-swjzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c1v-swjzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:people-nearby-outline"} {...others} />);
}

export default Component;
