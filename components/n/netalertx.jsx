import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_mvju3ef.css';
import '../../css/h/h_1n0zf8d.css';
import '../../css/t/tik2kabvz.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="f_mvju3ef"/><path class="h_1n0zf8d"/><path class="tik2kabvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netalertx"} {...others} />);
}

export default Component;
