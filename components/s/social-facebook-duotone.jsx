import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxox9ob4e.css';
import '../../css/c/cnvf9lbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zxox9ob4e"/><path class="cnvf9lbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:social-facebook-duotone"} {...others} />);
}

export default Component;
