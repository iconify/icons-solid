import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul95bdbte.css';
import '../../css/t/thyn37bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ul95bdbte"/><path class="thyn37bbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:zero-size"} {...others} />);
}

export default Component;
