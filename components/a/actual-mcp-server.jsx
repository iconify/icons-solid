import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpdbmfbhr.css';
import '../../css/i/i6oim-fty.css';
import '../../css/n/n30ul-b9z.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="dpdbmfbhr"/><path class="i6oim-fty"/><path class="n30ul-b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:actual-mcp-server"} {...others} />);
}

export default Component;
