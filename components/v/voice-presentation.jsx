import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bng3m8b7n.css';
import '../../css/y/yy-od7caa.css';
import '../../css/o/om051pb-s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bng3m8b7n"/><circle class="yy-od7caa"/><path class="om051pb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:voice-presentation"} {...others} />);
}

export default Component;
