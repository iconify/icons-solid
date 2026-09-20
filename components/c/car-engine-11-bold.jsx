import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c89x4jb8t.css';
import '../../css/l/l2c2myl2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c89x4jb8t"/><path class="l2c2myl2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-engine-11-bold"} {...others} />);
}

export default Component;
