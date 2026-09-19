import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leuvwevba.css';
import '../../css/i/i4nfj-f2n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="leuvwevba"/><path class="i4nfj-f2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tropical-storm"} {...others} />);
}

export default Component;
