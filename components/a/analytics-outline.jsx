import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sygr84b-x.css';
import '../../css/k/k8s9wh9wt.css';
import '../../css/j/jdy8g-bst.css';
import '../../css/u/uhh-41b9t.css';
import '../../css/b/b1zw3zbim.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sygr84b-x"/><circle class="k8s9wh9wt"/><circle class="jdy8g-bst"/><circle class="uhh-41b9t"/><circle class="b1zw3zbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:analytics-outline"} {...others} />);
}

export default Component;
