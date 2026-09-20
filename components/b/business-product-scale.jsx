import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r59434b-s.css';
import '../../css/l/llsk85l6z.css';
import '../../css/m/mtah3b3np.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r59434b-s"/><path class="llsk85l6z"/><path class="mtah3b3np"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-product-scale"} {...others} />);
}

export default Component;
