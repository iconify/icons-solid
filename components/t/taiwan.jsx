import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moccqs3jy.css';
import '../../css/j/jck5bgb1n.css';
import '../../css/a/alxt9kbde.css';
import '../../css/s/seckcuo1f.css';
import '../../css/m/mwkdnjw-x.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="moccqs3jy"/><path class="jck5bgb1n"/><path class="alxt9kbde"/><path class="seckcuo1f"/><path class="mwkdnjw-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:taiwan"} {...others} />);
}

export default Component;
