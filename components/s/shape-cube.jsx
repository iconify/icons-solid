import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xqrnecbpb.css';
import '../../css/s/s3h23vb4e.css';
import '../../css/f/fwxgtt44t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xqrnecbpb"/><path class="s3h23vb4e"/><path class="fwxgtt44t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shape-cube"} {...others} />);
}

export default Component;
