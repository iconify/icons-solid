import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oth-gwbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oth-gwbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:eject-fill"} {...others} />);
}

export default Component;
