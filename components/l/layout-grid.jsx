import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntw0kh4xh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntw0kh4xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:layout-grid"} {...others} />);
}

export default Component;
