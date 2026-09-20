import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts_wbobix.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ts_wbobix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:safe-vault-remix"} {...others} />);
}

export default Component;
