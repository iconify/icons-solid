import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo_2v9b7x.css';

const viewBox = {"width":26,"height":26};
const content = `<path clip-rule="evenodd" class="bo_2v9b7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:android-os"} {...others} />);
}

export default Component;
