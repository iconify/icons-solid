import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyi633vpj.css';
import '../../css/c/cbt8elbze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yyi633vpj"/><path clip-rule="evenodd" class="cbt8elbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:copy-24"} {...others} />);
}

export default Component;
