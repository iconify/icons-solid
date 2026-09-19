import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhso8hlxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lhso8hlxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chicken-leg-filled"} {...others} />);
}

export default Component;
