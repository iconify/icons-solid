import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz3pnrlyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jz3pnrlyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:googlenearby"} {...others} />);
}

export default Component;
