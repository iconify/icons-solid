import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld5lf-b5t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ld5lf-b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:laravel-nova"} {...others} />);
}

export default Component;
