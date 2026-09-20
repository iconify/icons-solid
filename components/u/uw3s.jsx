import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzjpmdbit.css';
import '../../css/h/h0kgu1k_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzjpmdbit"/><path class="h0kgu1k_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:uw3s"} {...others} />);
}

export default Component;
