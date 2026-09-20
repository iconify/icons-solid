import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmh3rlnos.css';
import '../../css/d/dazc8w85q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmh3rlnos"/><path class="dazc8w85q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-arrow-up"} {...others} />);
}

export default Component;
