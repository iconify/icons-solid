import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdssnbbom.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/q/q285h9bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdssnbbom"/><path class="bwibdw4bb"/><path class="q285h9bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:universal-access"} {...others} />);
}

export default Component;
