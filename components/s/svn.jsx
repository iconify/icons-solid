import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndxyiq8pj.css';
import '../../css/l/lyhf8fbbo.css';

const viewBox = {"width":33,"height":24};
const content = `<path class="ndxyiq8pj"/><path class="lyhf8fbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:svn"} {...others} />);
}

export default Component;
