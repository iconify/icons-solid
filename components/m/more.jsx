import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bct-im56e.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/m/mykin67du.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="bct-im56e"/><circle class="tqb_6nb6c"/><circle class="mykin67du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:more"} {...others} />);
}

export default Component;
