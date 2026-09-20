import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjsxf6bra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjsxf6bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:unsplash"} {...others} />);
}

export default Component;
