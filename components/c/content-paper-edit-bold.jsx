import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yas0kcb_a.css';
import '../../css/s/sz0y6ba_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yas0kcb_a"/><path class="sz0y6ba_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:content-paper-edit-bold"} {...others} />);
}

export default Component;
