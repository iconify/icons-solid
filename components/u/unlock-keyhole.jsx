import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ino9h4bpe.css';
import '../../css/n/nxnw64b0f.css';
import '../../css/c/cbgw5tb5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ino9h4bpe"/><rect class="nxnw64b0f"/><path class="cbgw5tb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:unlock-keyhole"} {...others} />);
}

export default Component;
