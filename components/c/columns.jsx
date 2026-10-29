import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojz-7nhbw.css';
import '../../css/z/zr7zg75lz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojz-7nhbw"/><path class="zr7zg75lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:columns"} {...others} />);
}

export default Component;
