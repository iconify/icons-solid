import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1z-b7k0t.css';
import '../../css/g/gnb4snbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1z-b7k0t"/><path class="gnb4snbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:file-format-zip"} {...others} />);
}

export default Component;
