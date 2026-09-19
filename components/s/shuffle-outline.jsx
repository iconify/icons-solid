import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt4cuabsh.css';
import '../../css/s/s3xv2_brc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bt4cuabsh"/><path clip-rule="evenodd" class="s3xv2_brc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:shuffle-outline"} {...others} />);
}

export default Component;
