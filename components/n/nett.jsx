import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu4uxxb2t.css';
import '../../css/d/d8a-he8ve.css';
import '../../css/j/jbqmj0hrk.css';
import '../../css/q/q8ukyccho.css';
import '../../css/v/vdmxvxn_w.css';
import '../../css/g/gmcau7bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu4uxxb2t"/><path class="d8a-he8ve"/><path class="jbqmj0hrk"/><path class="q8ukyccho"/><path class="vdmxvxn_w"/><path class="gmcau7bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nett"} {...others} />);
}

export default Component;
