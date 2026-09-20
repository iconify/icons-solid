import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skbbg-s7m.css';
import '../../css/o/o4ad8gbrb.css';
import '../../css/f/fnw06pb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="skbbg-s7m"/><path clip-rule="evenodd" class="o4ad8gbrb"/><path class="fnw06pb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-move-light"} {...others} />);
}

export default Component;
