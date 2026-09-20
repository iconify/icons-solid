import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zugv0mu1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zugv0mu1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:skip-prev-filled"} {...others} />);
}

export default Component;
