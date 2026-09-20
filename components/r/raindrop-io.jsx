import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgvq-7bzz.css';
import '../../css/k/kh19l6bin.css';
import '../../css/t/trqox8lmu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xgvq-7bzz"/><path class="kh19l6bin"/><path class="trqox8lmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raindrop-io"} {...others} />);
}

export default Component;
