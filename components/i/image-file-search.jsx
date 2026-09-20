import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_600mvup.css';
import '../../css/b/bhngwdwnp.css';
import '../../css/t/t26w6qbaq.css';
import '../../css/l/lf0xgxbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c_600mvup"/><path class="bhngwdwnp"/><path class="t26w6qbaq"/><path class="lf0xgxbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:image-file-search"} {...others} />);
}

export default Component;
