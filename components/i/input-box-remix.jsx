import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8bnu1bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l8bnu1bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:input-box-remix"} {...others} />);
}

export default Component;
