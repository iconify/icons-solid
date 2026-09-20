import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8s903bpo.css';
import '../../css/q/qpkq3pbej.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="y8s903bpo"/><path class="qpkq3pbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:adobe-photoshop-light"} {...others} />);
}

export default Component;
