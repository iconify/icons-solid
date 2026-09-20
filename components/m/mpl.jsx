import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzzpno9do.css';
import '../../css/i/ikevykbev.css';
import '../../css/f/fx3kptb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzzpno9do"/><path class="ikevykbev"/><path class="fx3kptb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mpl"} {...others} />);
}

export default Component;
