import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy-6gvnnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy-6gvnnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:proton-mail-symbol"} {...others} />);
}

export default Component;
