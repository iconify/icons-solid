import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsebaw_qg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bsebaw_qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:moon-cloud-solid"} {...others} />);
}

export default Component;
