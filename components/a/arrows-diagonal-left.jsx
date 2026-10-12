import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktt2-ebbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktt2-ebbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrows-diagonal-left"} {...others} />);
}

export default Component;
