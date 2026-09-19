import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/houilkbik.css';
import '../../css/h/h8mlz4ctj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="houilkbik"/><rect class="h8mlz4ctj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:clipboard-fill"} {...others} />);
}

export default Component;
