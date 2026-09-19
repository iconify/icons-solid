import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npewmlxrc.css';
import '../../css/u/unp6fccbt.css';
import '../../css/n/na_wzcctt.css';
import '../../css/e/e4sbecbzl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="npewmlxrc"/><path class="unp6fccbt"/><path class="na_wzcctt"/><path class="e4sbecbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:diploma-1"} {...others} />);
}

export default Component;
