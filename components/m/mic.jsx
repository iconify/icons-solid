import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogs-x9j_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ogs-x9j_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:mic"} {...others} />);
}

export default Component;
