import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbmk7ebis.css';
import '../../css/n/nnln5nbkq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lbmk7ebis"/><path class="nnln5nbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-wood-plant-grow"} {...others} />);
}

export default Component;
