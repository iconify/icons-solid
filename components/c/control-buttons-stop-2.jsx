import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt9qsmbsn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nt9qsmbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:control-buttons-stop-2"} {...others} />);
}

export default Component;
