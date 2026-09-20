import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx5lto5hy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gx5lto5hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:recording-tape-2-solid"} {...others} />);
}

export default Component;
