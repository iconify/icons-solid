import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2b_x2s3y.css';
import '../../css/c/cu9m93g4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2b_x2s3y"/><path class="cu9m93g4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:external-link-fill"} {...others} />);
}

export default Component;
