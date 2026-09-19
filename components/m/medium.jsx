import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1gfmgbwj.css';
import '../../css/z/z_i6pn2af.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1gfmgbwj"/><path class="z_i6pn2af"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:medium"} {...others} />);
}

export default Component;
