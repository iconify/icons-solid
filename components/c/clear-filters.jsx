import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfmav5c8a.css';
import '../../css/k/k1fidk1yd.css';
import '../../css/q/qxqpfx-pk.css';
import '../../css/o/ohp5enpdb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jfmav5c8a"/><path class="k1fidk1yd"/><circle class="qxqpfx-pk"/><path class="ohp5enpdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:clear-filters"} {...others} />);
}

export default Component;
