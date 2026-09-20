import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss2xjkb3d.css';
import '../../css/n/n_iamfbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ss2xjkb3d"/><path class="n_iamfbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:metav"} {...others} />);
}

export default Component;
