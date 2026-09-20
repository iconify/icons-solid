import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-w3942xx.css';
import '../../css/c/csowzdbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u-w3942xx"/><path class="csowzdbdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:fold-up-24"} {...others} />);
}

export default Component;
