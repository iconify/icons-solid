import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z67eqnb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z67eqnb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrow-circle-left-fill"} {...others} />);
}

export default Component;
