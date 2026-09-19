import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwz2ijbhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwz2ijbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:battery-medium-02"} {...others} />);
}

export default Component;
