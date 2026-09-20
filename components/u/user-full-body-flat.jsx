import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9_kk0hyu.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="n9_kk0hyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-full-body-flat"} {...others} />);
}

export default Component;
