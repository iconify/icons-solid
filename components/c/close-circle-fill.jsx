import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhh-_dwpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhh-_dwpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:close-circle-fill"} {...others} />);
}

export default Component;
