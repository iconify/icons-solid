import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j29lsnbme.css';
import '../../css/p/p4a6qjokb.css';
import '../../css/g/g7l77ybvb.css';
import '../../css/h/hdn7b_0el.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j29lsnbme"/><path clip-rule="evenodd" class="p4a6qjokb"/><path clip-rule="evenodd" class="g7l77ybvb"/><path class="hdn7b_0el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layers-4-16"} {...others} />);
}

export default Component;
