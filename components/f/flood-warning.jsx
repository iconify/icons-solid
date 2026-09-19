import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffby4cb3r.css';
import '../../css/m/m14k5zb3c.css';
import '../../css/o/o-vb-yaor.css';
import '../../css/m/ml0-2dt_k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ffby4cb3r"/><path class="m14k5zb3c"/><path class="o-vb-yaor"/><path class="ml0-2dt_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flood-warning"} {...others} />);
}

export default Component;
