import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lda6pabva.css';
import '../../css/t/ttouprbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lda6pabva"/><path class="ttouprbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:coins"} {...others} />);
}

export default Component;
