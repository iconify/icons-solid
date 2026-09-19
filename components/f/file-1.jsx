import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvivz2ben.css';
import '../../css/z/zznnyf-1u.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="cvivz2ben"/><path class="zznnyf-1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:file-1"} {...others} />);
}

export default Component;
