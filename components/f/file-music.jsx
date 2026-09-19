import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/g/g2cpwab9q.css';
import '../../css/p/p-9wjabkv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG77z2GeEx"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="g2cpwab9q"/><circle class="p-9wjabkv"/></g></mask></defs><path mask="url(#SVG77z2GeEx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-music"} {...others} />);
}

export default Component;
