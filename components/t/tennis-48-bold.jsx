import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwgv7ib-v.css';
import '../../css/f/fouauzkco.css';
import '../../css/f/feis6rhhc.css';
import '../../css/d/d06d92bhc.css';
import '../../css/k/krfzk8bav.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jwgv7ib-v"/><path class="fouauzkco"/><path class="feis6rhhc"/><path class="d06d92bhc"/><path class="krfzk8bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tennis-48-bold"} {...others} />);
}

export default Component;
