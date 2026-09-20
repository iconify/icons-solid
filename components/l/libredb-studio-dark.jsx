import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uezwkhbui.css';
import '../../css/k/k-_y3hhqw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uezwkhbui"/><path class="k-_y3hhqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:libredb-studio-dark"} {...others} />);
}

export default Component;
