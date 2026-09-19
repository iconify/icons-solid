import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaev_d16p.css';
import '../../css/a/a8l7vd6df.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="zaev_d16p"/><rect class="a8l7vd6df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pause-filled"} {...others} />);
}

export default Component;
