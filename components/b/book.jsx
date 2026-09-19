import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2_wgcb5j.css';
import '../../css/h/h1kxnnbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2_wgcb5j duoicon-secondary-layer"/><path class="duoicon-primary-layer h1kxnnbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:book"} {...others} />);
}

export default Component;
