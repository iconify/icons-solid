import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqdrapcbo.css';
import '../../css/m/m25ry3gfk.css';
import '../../css/h/hdamidbnm.css';
import '../../css/s/six1ttbia.css';
import '../../css/u/uyzcbshul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqdrapcbo wm-shadow"/><path class="m25ry3gfk wm-k"/><path class="hdamidbnm wm-k"/><path class="six1ttbia wm-a"/><path class="uyzcbshul wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:wrap-text"} {...others} />);
}

export default Component;
