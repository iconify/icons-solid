import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdvz_fe7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdvz_fe7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:stove-induction-pot"} {...others} />);
}

export default Component;
