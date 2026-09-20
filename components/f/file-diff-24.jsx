import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xir71cb7c.css';
import '../../css/n/n6l7qezyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xir71cb7c"/><path class="n6l7qezyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-diff-24"} {...others} />);
}

export default Component;
