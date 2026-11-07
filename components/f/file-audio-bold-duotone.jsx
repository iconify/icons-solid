import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4z1ldb0q.css';
import '../../css/o/oj6gwrmjs.css';
import '../../css/g/gvp-p5blk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v4z1ldb0q"/><path clip-rule="evenodd" class="oj6gwrmjs"/><path class="gvp-p5blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-audio-bold-duotone"} {...others} />);
}

export default Component;
