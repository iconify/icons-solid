import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usrhiduyi.css';
import '../../css/i/iio1gmbov.css';
import '../../css/o/o9flz4bgt.css';
import '../../css/j/jyvf8cbzs.css';
import '../../css/x/xom0gj3oz.css';
import '../../css/b/b6d_i5zxa.css';
import '../../css/t/t89aj3b7h.css';
import '../../css/o/oge732cip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usrhiduyi"/><path class="iio1gmbov"/><path class="o9flz4bgt"/><path class="jyvf8cbzs"/><path class="xom0gj3oz"/><path class="b6d_i5zxa"/><path class="t89aj3b7h"/><path class="oge732cip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wgc"} {...others} />);
}

export default Component;
