import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/q/qkbnnhzhh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7T0Ivd9S"><g class="s9cl3zbei"><rect class="g47cb4b4t"/><path class="qkbnnhzhh"/></g></mask></defs><path mask="url(#SVG7T0Ivd9S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:word"} {...others} />);
}

export default Component;
