import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/typ168lje.css';
import '../../css/b/brefaib6f.css';
import '../../css/g/gv1maybhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="typ168lje wm-shadow"/><path class="brefaib6f wm-k"/><path class="gv1maybhe wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:maximize"} {...others} />);
}

export default Component;
