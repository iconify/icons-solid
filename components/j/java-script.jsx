import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx35p2zye.css';
import '../../css/c/cszcplbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yx35p2zye"/><path class="cszcplbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:java-script"} {...others} />);
}

export default Component;
