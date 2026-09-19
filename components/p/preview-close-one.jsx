import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tar6cn05y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tar6cn05y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:preview-close-one"} {...others} />);
}

export default Component;
