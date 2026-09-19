import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfry528fm.css';
import '../../css/i/iudisjbgy.css';
import '../../css/h/h0r4iwbjo.css';
import '../../css/p/p1e45sl2p.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="cfry528fm"/><rect class="iudisjbgy"/><rect class="h0r4iwbjo"/><rect class="p1e45sl2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dashboard-filled"} {...others} />);
}

export default Component;
