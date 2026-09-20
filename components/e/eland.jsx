import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9khlybqh.css';
import '../../css/n/nnwxahb5l.css';
import '../../css/h/h091qbb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9khlybqh"/><path class="nnwxahb5l"/><path class="h091qbb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:eland"} {...others} />);
}

export default Component;
